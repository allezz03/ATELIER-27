import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Supabase è opzionale in locale: il form mostra comunque una conferma demo.
// Configura entrambe le variabili in .env.local e su Vercel per salvare le richieste.
export const supabase = url && anonKey ? createClient(url, anonKey) : null
