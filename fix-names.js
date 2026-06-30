const fs = require('fs');

async function test() {
  const env = fs.readFileSync('.env', 'utf8');
  const apiKeyMatch = env.match(/SUPABASE_ANON_KEY=(.*)/);
  const anonKey = apiKeyMatch[1].trim();
  const urlMatch = env.match(/SUPABASE_URL=(.*)/);
  const url = urlMatch[1].trim();

  // fetch all resumes where title is Resume.pdf and parsed_text is not null
  const res = await fetch(`${url}/rest/v1/resumes?select=*&title=eq.Resume.pdf`, {
    headers: { 'apikey': anonKey, 'Authorization': `Bearer ${anonKey}` }
  });
  const data = await res.json();
  
  if (data && data.length > 0) {
      for (const row of data) {
          if (row.parsed_text) {
              try {
                  const parsed = JSON.parse(row.parsed_text);
                  const name = parsed?.basics?.name;
                  if (name) {
                      const safeName = name.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '_');
                      // We don't have job title easily, just guess or use default
                      const newTitle = `${safeName}_Mobile_Dev.pdf`;
                      console.log(`Updating ${row.id} to ${newTitle}`);
                      
                      await fetch(`${url}/rest/v1/resumes?id=eq.${row.id}`, {
                          method: 'PATCH',
                          headers: { 
                              'apikey': anonKey, 
                              'Authorization': `Bearer ${anonKey}`,
                              'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({ title: newTitle })
                      });
                  } else {
                     await fetch(`${url}/rest/v1/resumes?id=eq.${row.id}`, {
                          method: 'DELETE',
                          headers: { 'apikey': anonKey, 'Authorization': `Bearer ${anonKey}` }
                      });
                  }
              } catch (e) {
                 console.log(e);
              }
          } else {
              // Delete it since it has no parsed text
              await fetch(`${url}/rest/v1/resumes?id=eq.${row.id}`, {
                  method: 'DELETE',
                  headers: { 'apikey': anonKey, 'Authorization': `Bearer ${anonKey}` }
              });
          }
      }
  } else {
      console.log('No resumes to fix.');
  }
}
test();
