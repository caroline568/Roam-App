// Drop this into the frontend project as src/lib/supabaseClient.js
// once you're ready to swap the local seed data for real Supabase calls.
//
// npm install @supabase/supabase-js
//
// Add to the frontend's .env:
//   VITE_SUPABASE_URL=...
//   VITE_SUPABASE_ANON_KEY=...

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Example usage once wired up:
//
// const { data, error } = await supabase.functions.invoke('get-recommendations', {
//   body: { lat, lng, vibeTags: session.vibe.tags, vibeLabel: session.vibe.label,
//           timeMinutes: session.time.minutes, timeLabel: session.time.label,
//           budgetMax: session.budget.max === Infinity ? null : session.budget.max }
// })
//
// const { data: exploration } = await supabase
//   .from('explorations')
//   .insert({ user_id: user.id, place_id, vibe: vibeLabel, reason })
//   .select()
//   .single()
//
// await supabase.functions.invoke('submit-community-post', {
//   body: { explorationId, photoUrl, caption, tags, lat, lng }
// })
