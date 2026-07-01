import postgres from 'npm:postgres';

const sql = postgres('postgresql://postgres:postgres@127.0.0.1:54322/postgres');

async function run() {
  const resumes = await sql`SELECT id, title, created_at FROM resumes`;
  console.log("Resumes:");
  console.log(resumes);

  const evals = await sql`SELECT resume_id, original_ats_score FROM resume_evaluations`;
  console.log("Evaluations:");
  console.log(evals);

  Deno.exit(0);
}

run();
