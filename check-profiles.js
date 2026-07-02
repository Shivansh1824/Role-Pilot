const fs = require('fs');

async function test() {
  const env = fs.readFileSync('.env', 'utf8');
  const anonKey = env.match(/SUPABASE_ANON_KEY=(.*)/)[1].trim();
  const url = env.match(/SUPABASE_URL=(.*)/)[1].trim();

  const res = await fetch(`${url}/rest/v1/profiles?select=*&limit=1`, {
    headers: { 'apikey': anonKey, 'Authorization': `Bearer ${anonKey}` }
  });
  console.log('Profiles:', await res.json());
}
test();
