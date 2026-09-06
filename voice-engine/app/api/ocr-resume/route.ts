import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY_APP || process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to base64 for Gemini inlineData
    const buffer = await file.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString('base64');
    
    // Fallback mime type if not strictly PDF
    let mimeType = file.type;
    if (!mimeType || mimeType === '') {
      if (file.name.endsWith('.pdf')) mimeType = 'application/pdf';
      else if (file.name.endsWith('.txt')) mimeType = 'text/plain';
      else mimeType = 'application/octet-stream';
    }

    const systemInstruction = `You are a world-class Resume Data Extractor. 
Extract the most critical professional information from the provided resume.
You MUST output ONLY valid, raw JSON. Do not use markdown blocks, do not use backticks.

Output exactly this JSON structure:
{
  "name": "Candidate's full name",
  "experience_years": "Estimated total years of experience (e.g., '5 years', 'Fresher', '10+ years')",
  "education": ["List of degrees and universities"],
  "skills": ["List of top 10 technical or professional skills"],
  "projects_or_roles": [
    {
      "title": "Job Title or Project Name",
      "company": "Company Name",
      "summary": "1-2 sentence summary of impact and tech stack"
    }
  ]
}

CRITICAL: Ignore phone numbers, email addresses, LinkedIn URLs, and irrelevant fluff. Only extract the professional data needed for a technical/domain interview.`;

    let responseText = '';
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.5-flash-lite', 'gemini-3.7-flash', 'gemini-flash-latest'];
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: [
            systemInstruction,
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType
              }
            },
            "Please extract the data from this resume."
          ],
          config: {
            temperature: 0.1,
            responseMimeType: 'application/json'
          }
        });
        responseText = response.text?.trim() || '{}';
        if (responseText) break;
      } catch (err) {
        lastError = err;
        console.warn(`Resume OCR model ${modelName} failed, trying next...`, err);
      }
    }

    if (!responseText && lastError) {
      throw lastError;
    }

    const output = responseText;
    
    try {
      const parsedJson = JSON.parse(output);
      return NextResponse.json({ success: true, data: parsedJson });
    } catch (parseError) {
      console.error('Failed to parse Gemini JSON:', output);
      return NextResponse.json({ error: 'Failed to extract valid JSON', raw: output }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Error in OCR processing:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
