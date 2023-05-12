<script setup>
import { storeToRefs } from 'pinia'
import { supabase } from 'supabase-js'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://otntldqkekrrtftshfnt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
</script>

<template>
  <main>storeToRefs</main>
</template>

<style scoped></style>
