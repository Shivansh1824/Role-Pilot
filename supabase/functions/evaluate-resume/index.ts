const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { resume_text, job_title, job_description } = await req.json()
    const apiKey = Deno.env.get('GEMINI_API_KEY')

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY environment variable is not set' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Call Google Gemini 3.5 Flash API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`

    const systemPrompt = `You are an expert ATS (Applicant Tracking System) and career coach. Your task is to evaluate a user's resume against a specific job description.
Return a valid JSON object with the following structure:
{
  "original_ats_score": 85, // Integer (0-100) representing how well the current resume matches the job description
  "matched_skills": ["JavaScript", "HTML", "CSS"], // List of skills in the resume that match the job description
  "missing_skills": ["Deno", "Supabase Edge Functions"], // Critical skills/keywords missing from the resume but present/needed for the job description
  "feedback": "Your resume has a strong foundation but lacks experience with cloud databases...", // General feedback and actionable advice
  "refined_resume_content": "# John Doe\\n\\n## Professional Summary...", // Markdown content of the improved resume. The resume should be updated to naturally incorporate the missing skills and better align with the job description.
  "refined_ats_score": 95 // Predicted score (Integer 0-100) if they use the refined resume content
}
Do not include any markdown formatting (like \`\`\`json) in your response. Return raw JSON.`

    const prompt = `Job Title: ${job_title}
Job Description: ${job_description}

Resume Content:
${resume_text}`

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Gemini API Error:', errText)
      return new Response(
        JSON.stringify({ error: `Gemini API returned error: ${response.status}`, details: errText }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const result = await response.json()
    const textResponse = result.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textResponse) {
      throw new Error('Empty response received from Gemini API')
    }

    // Parse it to ensure it is valid JSON, then send it back
    const parsedData = JSON.parse(textResponse)

    return new Response(
      JSON.stringify(parsedData),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Edge Function Error:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
