import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import type { Database } from './database.types'

// Fallback values for development
const supabaseUrl = PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY || 'placeholder_key'

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
)