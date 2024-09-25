import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://xtxwmrmjrggeughetccr.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0eHdtcm1qcmdnZXVnaGV0Y2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NjU2OTAsImV4cCI6MjA0MjM0MTY5MH0.4ZCb7HD6OsV2mp4YVPuxurRbt7w8JAkx5k2fMnLNH2g`
const supabase= createClient(supabaseUrl, supabaseKey);
export default supabase;


