import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "http://3.1.211.225:8000";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzU5NDk2NzkzLCJleHAiOjIwNzUwNzI3OTN9.-LquvTT7UAdrYNGnm2mQkbwh25xEzhwTPype05qK9f8";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
