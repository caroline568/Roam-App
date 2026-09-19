// supabase/functions/get-recommendations/index.ts
//
// POST body: { lat, lng, vibeTags: string[], vibeLabel: string,
//               timeMinutes: number, timeLabel: string,
//               budgetMax: number | null, radiusKm?: number }
//
// Returns places within radiusKm, ranked by the same scoring logic used in
// the frontend prototype (src/data/places.js -> scorePlace / reasonFor),
// now running server-side against real submitted places instead of seed data.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function scorePlace(place: any, { vibeTags, timeMinutes, budgetMax }: any) {
  let score = 0
  if (vibeTags?.length && place.tags?.some((t: string) => vibeTags.includes(t))) score += 40
  if (timeMinutes) {
    if (place.duration_min <= timeMinutes) score += 25
    else if (place.duration_min <= timeMinutes * 1.2) score += 10
    else score -= 20
  }
  if (budgetMax != null) {
    if (budgetMax === Infinity) score += 15
    else if (place.cost <= budgetMax) score += 20
    else score -= 25
  }
  score += (place.discovery_score ?? 50) * 0.2
  return score
}

function reasonFor(place: any, { vibeLabel, vibeTags, timeLabel, timeMinutes, budgetMax }: any) {
  const reasons: string[] = []
  if (vibeTags?.length && place.tags?.some((t: string) => vibeTags.includes(t))) {
    reasons.push(`matches your ${vibeLabel?.toLowerCase()} mood`)
  }
  if (timeMinutes && place.duration_min <= timeMinutes) {
    reasons.push(`fits comfortably in your ${timeLabel?.toLowerCase()}`)
  }
  if (budgetMax != null && place.cost <= budgetMax) {
    reasons.push('within your budget')
  }
  if (place.discovery_type === 'gem') {
    reasons.push("a hidden gem, not just another top-10 list entry")
  }
  return reasons.length ? reasons.slice(0, 2).join(' and ') + '.' : 'A strong all-round pick nearby.'
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const body = await req.json()
    const { lat, lng, vibeTags = [], vibeLabel, timeMinutes, timeLabel, budgetMax, radiusKm = 40 } = body

    if (lat == null || lng == null) {
      return new Response(JSON.stringify({ error: 'lat and lng are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Uses the nearby_places() Postgres function defined in
    // migrations/20260917000003_nearby_places_fn.sql (PostGIS ST_DWithin).
    const { data: places, error } = await supabase.rpc('nearby_places', {
      user_lat: lat,
      user_lng: lng,
      radius_km: radiusKm,
    })

    if (error) throw error

    const ranked = (places ?? [])
      .map((place: any) => ({
        ...place,
        score: scorePlace(place, { vibeTags, timeMinutes, budgetMax }),
        reason: reasonFor(place, { vibeLabel, vibeTags, timeLabel, timeMinutes, budgetMax }),
      }))
      .filter((p: any) => p.score > 10)
      .sort((a: any, b: any) => b.score - a.score)

    return new Response(JSON.stringify({ results: ranked }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
