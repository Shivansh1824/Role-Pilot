const fs = require('fs');

async function test() {
  const env = fs.readFileSync('.env', 'utf8');
  const apiKeyMatch = env.match(/SUPABASE_ANON_KEY=(.*)/);
  const anonKey = apiKeyMatch[1].trim();

  const res = await fetch('https://zifndlreenpbjhfltqtj.supabase.co/functions/v1/evaluate-resume', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${anonKey}`
    },
    body: JSON.stringify({
      resume_id: "test",
      resume_document: { mimeType: "text/plain", data: "YmxhYmxh" },
      job_title: "dev",
      job_description: "coding",
      experience_level: "mid"
    })
  });
  console.log(res.status);
  console.log(await res.text());
}
test();
