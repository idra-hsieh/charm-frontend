import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables: SUPABASE_URL or SUPABASE_ANON_KEY")
}

/**
 * Standard Supabase client.
 * Uses the ANON_KEY. Safe for operations that should respect RLS policies.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Admin Supabase client.
 * Uses the SERVICE_ROLE_KEY. Bypasses RLS policies.
 * IMPORTANT: Only use this in server-side API routes. NEVER expose this to the client/browser.
 */
export const supabaseAdmin = supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

if (!supabaseAdmin) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY is missing. Admin operations effectively disabled.");
}