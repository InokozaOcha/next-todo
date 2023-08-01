import { createClient } from "@supabase/supabase-js";

export type Database = {
  id: string;
  created_at: string;
  user_id: string;
  title: string;
  memo: string;
  state: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;
