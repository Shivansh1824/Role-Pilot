// Supabase Client Initialization using CDN library
// Exposes the supabaseClient database connection

async function loadEnv() {
    try {
        const response = await fetch('/.env');
        if (!response.ok) throw new Error("Could not load .env file");
        const text = await response.text();
        const env = {};
        text.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) return;
            const eqIndex = trimmed.indexOf('=');
            if (eqIndex === -1) return;
            const key = trimmed.slice(0, eqIndex).trim();
            const val = trimmed.slice(eqIndex + 1).trim();
            env[key] = val;
        });
        return env;
    } catch (e) {
        console.warn("Dynamic .env fetch failed. Falling back to default credentials.", e);
        return {
            SUPABASE_URL: "https://zifndlreenpbjhfltqtj.supabase.co",
            SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZm5kbHJlZW5wYmpoZmx0cXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NzMwOTEsImV4cCI6MjA5NjE0OTA5MX0.Fb8jMah4yV0ymF6TpZuXfUXa9AJh_jF6JqNOQ9gWaMA"
        };
    }
}

let supabaseClient = null;

export async function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;

    if (!window.supabase) {
        throw new Error("Supabase CDN library failed to load. Check your network or script tags.");
    }

    const env = await loadEnv();
    const { createClient } = window.supabase;
    supabaseClient = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
    return supabaseClient;
}
