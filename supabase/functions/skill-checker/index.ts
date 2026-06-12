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
    const { skills } = await req.json()
    
    if (!skills || !Array.isArray(skills)) {
        return new Response(
            JSON.stringify({ error: 'Expected an array of skills in the request body.' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }

    const apiKey = Deno.env.get('GEMINI_API_KEY')
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY environment variable is not set' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Call Google Gemini 3.5 Flash API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`

    const systemPrompt = `<context>
You are an expert AI recruiter and data normalization API processing user-entered skills for a career platform.
A valid skill is a technical capability, soft skill, or domain expertise relevant to a professional career.
</context>

<source>
Predefined System Skills:
[React, Node.js, Python, JavaScript, TypeScript, AWS, Docker, Kubernetes, SQL, MongoDB, GraphQL, Git, CI/CD, Go, Rust, Java, C++, Swift, Kotlin, Firebase, Supabase, Next.js]

User Input:
${JSON.stringify(skills)}
</source>

<task>
Evaluate the provided array of User Input skills. For each skill:
1. Determine if it is a valid professional career skill.
2. If it is an abbreviation (e.g., "js", "k8s", "aws"), expand it to its full industry-standard name.
3. Correct any spelling or capitalization mistakes to match standard industry usage.
4. If the corrected skill matches one of our Predefined System Skills, you MUST use our exact spelling and casing.
</task>

<constraints>
- Reject nonsensical text, gibberish (e.g., "asdfgh"), and basic human/personal activities unrelated to workplace capabilities (e.g., "eating pizza", "sleeping").
- Do not flatter or coax the user. Do not explain your thought process outside of the required "reason" field.
</constraints>

<output_format>
Return ONLY this JSON (no prose, no markdown formatting like \`\`\`json):
{
  "allValid": boolean, // true ONLY if every skill in the array is valid
  "requiresConfirmation": boolean, // true if ANY valid skill had its spelling corrected or abbreviation expanded
  "results": [
    {
      "original": string, // the exact string the user provided
      "isValid": boolean, 
      "correctedName": string | null, // the full, corrected standard name. null if isValid is false.
      "wasModified": boolean, // true if you changed the string (expanded abbreviation, fixed spelling/casing)
      "reason": string // brief explanation of rejection or modification
    }
  ]
}
</output_format>

<verification>
- Ensure "wasModified" is true even for simple casing changes (e.g., "react" -> "React").
- If "isValid" is false, "correctedName" MUST be null.
- Output MUST be raw, valid JSON that can be executed directly by JSON.parse().
</verification>

<few_shot_example>
Example Input: ["js", "sleeping", "reactjs", "Public Speaking"]
Example Output:
{
  "allValid": false,
  "requiresConfirmation": true,
  "results": [
    {
      "original": "js",
      "isValid": true,
      "correctedName": "JavaScript",
      "wasModified": true,
      "reason": "Expanded industry abbreviation to standard name."
    },
    {
      "original": "sleeping",
      "isValid": false,
      "correctedName": null,
      "wasModified": false,
      "reason": "Basic human activity, not a professional capability."
    },
    {
      "original": "reactjs",
      "isValid": true,
      "correctedName": "React",
      "wasModified": true,
      "reason": "Matched Predefined System Skill exact casing and naming."
    },
    {
      "original": "Public Speaking",
      "isValid": true,
      "correctedName": "Public Speaking",
      "wasModified": false,
      "reason": "Valid soft skill, no changes needed."
    }
  ]
}
</few_shot_example>`

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: "Process the User Input skills and output the strict JSON." }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.1
        }
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Gemini API Error:', errText)
      return new Response(
        JSON.stringify({ error: \`Gemini API returned error: \${response.status}\`, details: errText }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const result = await response.json()
    const textResponse = result.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (!textResponse) {
      throw new Error('Empty response received from Gemini API')
    }

    // Parse to ensure it's valid JSON, then return it to the client
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
