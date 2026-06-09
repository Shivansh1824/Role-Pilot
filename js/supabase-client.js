// Supabase Client Initialization using CDN library
// Exposes the supabaseClient database connection

const SUPABASE_URL = "https://zifndlreenpbjhfltqtj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZm5kbHJlZW5wYmpoZmx0cXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NzMwOTEsImV4cCI6MjA5NjE0OTA5MX0.Fb8jMah4yV0ymF6TpZuXfUXa9AJh_jF6JqNOQ9gWaMA";

let supabaseClient = null;

export async function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;

    if (!window.supabase) {
        throw new Error("Supabase CDN library failed to load. Check your network or script tags.");
    }

    const { createClient } = window.supabase;
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabaseClient;
}
