import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhtlwdlouokxiyjxrkoc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhodGx3ZGxvdW9reGl5anhya29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1ODIwOTMsImV4cCI6MjAyNTE1ODA5M30.PWL1HoHUaFjylIAxvwewkVVT-840jbHgvwqQQOAFWdU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
