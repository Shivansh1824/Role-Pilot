import { createClient } from 'npm:@supabase/supabase-js';
import * as dotenv from 'npm:dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || 'http://127.0.0.1:54321';
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseKey) {
  console.error("Missing SUPABASE_ANON_KEY in .env");
  Deno.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDb() {
  const { data: resumes, error: rError } = await supabase.from('resumes').select('*');
  console.log("Resumes Table:", JSON.stringify(resumes, null, 2), "Error:", rError);

  const { data: evals, error: eError } = await supabase.from('resume_evaluations').select('*');
  console.log("Evaluations Table:", JSON.stringify(evals, null, 2), "Error:", eError);
}

checkDb();
