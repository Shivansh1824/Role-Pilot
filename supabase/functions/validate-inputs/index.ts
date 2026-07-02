import { createClient } from "@supabase/supabase-js"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { resume_document, job_title, job_description, is_ai_template } = await req.json()
    const apiKey = Deno.env.get('GEMINI_API_KEY')

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY is not set' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    if (!resume_document || !resume_document.data) {
      return new Response(
        JSON.stringify({ valid: false, validation_error: "No document was uploaded. Please upload a detailed resume." }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Use Gemini 3.1 Flash Lite for fast validation
    const validationModelUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`

    // --- STEP 1: RESUME VALIDATION ---
    const resumeCheckPrompt = `<context>
You are a strict data validator for an ATS pipeline. Your only job is to determine if a provided document text is actually a candidate's resume (CV).
</context>

<task>
Analyze if the source text is a resume/CV.
- If the text is a resume (contains career history, education, skills, projects, etc.), return "YES".
- If the text is random, completely unrelated (like recipes, lyrics, random notes, API responses, or an entirely different document type), return "NO".
</task>

<output_format>
Only output the word "YES" or "NO". Do not include any other text or punctuation.
</output_format>

<source>
The document is attached to this request as an inline file.
</source>`;

    const resumeRes = await fetch(validationModelUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ 
          role: 'user', 
          parts: [
            { text: resumeCheckPrompt },
            { inlineData: { mimeType: resume_document.mimeType, data: resume_document.data } }
          ] 
        }],
        generationConfig: { temperature: 0, maxOutputTokens: 5 }
      })
    });
    
    if (resumeRes.ok) {
      const resumeData = await resumeRes.json();
      const resumeResult = resumeData.candidates?.[0]?.content?.parts?.[0]?.text || "YES";
      if (resumeResult.trim().toUpperCase() === "NO") {
        return new Response(
          JSON.stringify({ valid: false, validation_error: "The uploaded document does not appear to be a valid resume. Please upload a real resume." }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }

    // --- STEP 2: JOB DESCRIPTION VALIDATION ---
    if (!is_ai_template) {
      const jdCheckPrompt = `<context>
You are a strict data validator for an ATS pipeline. Your only job is to determine if a provided text is actually a job description related to a specific role.
</context>

<task>
Analyze if the source text matches the target job title of "${job_title}".
- If the text is random, completely unrelated (like recipes, lyrics, generic notes, or an entirely different field), return "NO".
- If it is a valid job description related to this role, return "YES".
</task>

<output_format>
Only output the word "YES" or "NO". Do not include any other text or punctuation.
</output_format>

<source>
${job_description}
</source>`;

      const jdRes = await fetch(validationModelUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: jdCheckPrompt }] }],
          generationConfig: { temperature: 0, maxOutputTokens: 5 }
        })
      });
      
      if (jdRes.ok) {
        const jdData = await jdRes.json();
        const jdResult = jdData.candidates?.[0]?.content?.parts?.[0]?.text || "YES";
        if (jdResult.trim().toUpperCase() === "NO") {
          return new Response(
            JSON.stringify({ valid: false, validation_error: `The job description content does not seem to match the target role of "${job_title}". Please paste a relevant job description.` }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
    }

    // If both checks pass (or JD was bypassed)
    return new Response(
      JSON.stringify({ valid: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
