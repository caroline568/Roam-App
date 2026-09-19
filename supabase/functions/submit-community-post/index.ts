// supabase/functions/submit-community-post/index.ts
//
// POST body: { explorationId, photoUrl, caption, tags, lat, lng }
//
// This is where "verified visit" actually gets checked against reality:
// the RLS policy (see migrations/20260917000002_rls_policies.sql) already
// blocks posting to an exploration that isn't yours or isn't 'visited' —
// this function adds the second check, that the photo's own GPS location
// is actually near the place being posted about, and records how far off
// it was rather than silently trusting the client.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Straight-line distance in metres between two lat/lng points.
function haversineMeters(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371000
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

// A photo taken further than this from the place's stored location doesn't
// automatically get rejected (GPS drift is real, especially indoors) — it
// gets stored with verified=false so it can be reviewed rather than shown
// as a trusted proof-of-visit photo.
const VERIFIED_RADIUS_METERS = 300

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { explorationId, photoUrl, caption, tags = [], lat, lng } = await req.json()

    if (!explorationId || !photoUrl || lat == null || lng == null) {
      return new Response(JSON.stringify({ error: 'explorationId, photoUrl, lat and lng are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const authHeader = req.headers.get('Authorization')!
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Fetch the exploration + place location. RLS already restricts this
    // select to the caller's own explorations.
    const { data: exploration, error: exError } = await supabase
      .from('explorations')
      .select('id, status, user_id, place_id, places ( id, location )')
      .eq('id', explorationId)
      .single()

    if (exError || !exploration) {
      return new Response(JSON.stringify({ error: 'Exploration not found or not yours' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (exploration.status !== 'visited') {
      return new Response(
        JSON.stringify({ error: 'Check in at this place before posting — exploration is not marked visited yet' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Postgres `geography(Point)` comes back from PostgREST as GeoJSON —
    // { type: 'Point', coordinates: [lng, lat] }.
    const placeGeo = (exploration as any).places?.location
    const placeLng = placeGeo?.coordinates?.[0]
    const placeLat = placeGeo?.coordinates?.[1]

    let distanceMeters: number | null = null
    let verified = false
    if (placeLat != null && placeLng != null) {
      distanceMeters = haversineMeters(lat, lng, placeLat, placeLng)
      verified = distanceMeters <= VERIFIED_RADIUS_METERS
    }

    const { data: post, error: insertError } = await supabase
      .from('community_posts')
      .insert({
        exploration_id: explorationId,
        user_id: user.id,
        place_id: exploration.place_id,
        photo_url: photoUrl,
        caption,
        tags,
        capture_lat: lat,
        capture_lng: lng,
        distance_from_place_m: distanceMeters,
        verified,
      })
      .select()
      .single()

    if (insertError) throw insertError

    return new Response(JSON.stringify({ post, verified, distanceMeters }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
