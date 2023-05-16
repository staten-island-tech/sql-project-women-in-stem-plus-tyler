import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://otntldqkekrrtftshfnt.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bnRsZHFrZWtycnRmdHNoZm50Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzczNzQ5NSwiZXhwIjoxOTk5MzEzNDk1fQ.dQ8R4aWKGoYCb2ij6Ld84v5qJBY-9unNKVlJRBHcRdQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
