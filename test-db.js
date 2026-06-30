const fs = require('fs');

async function test() {
  const env = fs.readFileSync('.env', 'utf8');
  const apiKeyMatch = env.match(/SUPABASE_ANON_KEY=(.*)/);
  const anonKey = apiKeyMatch[1].trim();
  const urlMatch = env.match(/SUPABASE_URL=(.*)/);
  const url = urlMatch[1].trim();

  // Try querying resumes table
  const res = await fetch(`${url}/rest/v1/resumes?select=*&limit=1`, {
    headers: { 'apikey': anonKey, 'Authorization': `Bearer ${anonKey}` }
  });
  console.log('Resumes:', await res.json());

  // Try querying resume_evaluations table
  const res2 = await fetch(`${url}/rest/v1/resume_evaluations?select=*&limit=1`, {
    headers: { 'apikey': anonKey, 'Authorization': `Bearer ${anonKey}` }
  });
  console.log('Evaluations:', await res2.json());
}
test();
