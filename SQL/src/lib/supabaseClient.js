import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://otntldqkekrrtftshfnt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90bnRsZHFrZWtycnRmdHNoZm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3Mzc0OTUsImV4cCI6MTk5OTMxMzQ5NX0.CFl0Zkjz9LiEusgChLKotb5R11qi77X8r9HIz8p0NSs'
)
