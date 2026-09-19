-- Roam: seed data — same 10 places used in the frontend prototype,
-- now with real approximate coordinates so PostGIS radius search works.
-- Run with `supabase db reset` (applies migrations then this file) or
-- `psql -f supabase/seed.sql` against your project.

insert into public.places
  (id, name, category, tags, area, location, cost, cost_label, duration_min, description, hero_image_url, gallery, best_time, hours_note, discovery_type, discovery_score, status)
values
  ('11111111-1111-1111-1111-111111111101', 'Cedar & Vine', 'Café', array['cafe','quiet','coffee'], 'Karen',
    ST_SetSRID(ST_MakePoint(36.7076, -1.3184), 4326)::geography, 700, 'KSh 500–900', 90,
    'A garden café tucked behind a hedge most people walk straight past — long tables under a fig tree, slow filter coffee.',
    'https://picsum.photos/seed/cedarvine/900/700', array['https://picsum.photos/seed/cedarvine2/700/700'],
    '9:00–11:30am', 'Open 7am–5pm, closed Mondays', 'gem', 91, 'approved'),

  ('11111111-1111-1111-1111-111111111102', 'Karura Forest — Waterfall Trail', 'Nature', array['nature','hike','outdoors','active'], 'Karura',
    ST_SetSRID(ST_MakePoint(36.8333, -1.2333), 4326)::geography, 600, 'KSh 600 entry', 150,
    'A forest inside the city — the waterfall loop is the postcard shot, the quieter bamboo trail further in is where most never make it.',
    'https://picsum.photos/seed/karura/900/700', array['https://picsum.photos/seed/karura2/700/700'],
    'Before 9am or after 4pm', 'Open 6am–6pm daily', 'popular', 84, 'approved'),

  ('11111111-1111-1111-1111-111111111103', 'Mama Chichi''s', 'Street food', array['food','street food','market'], 'Kawangware',
    ST_SetSRID(ST_MakePoint(36.7333, -1.2833), 4326)::geography, 300, 'Under KSh 400', 45,
    'No sign, no seats to speak of — a mabati stall doing the best mutura in the area.',
    'https://picsum.photos/seed/mamachichi/900/700', array['https://picsum.photos/seed/mamachichi2/700/700'],
    'Lunchtime, 12–2pm', 'Open until she sells out, usually by 3pm', 'gem', 88, 'approved'),

  ('11111111-1111-1111-1111-111111111104', 'Kitengela Glass', 'Culture', array['culture','art','photo'], 'Kitengela',
    ST_SetSRID(ST_MakePoint(36.9587, -1.4746), 4326)::geography, 1200, 'KSh 1,000–1,500', 240,
    'A whole compound built from recycled glass and mosaic, part sculpture garden, part working glass studio.',
    'https://picsum.photos/seed/kitengela/900/700', array['https://picsum.photos/seed/kitengela2/700/700'],
    'Afternoon, golden hour', 'Open 9am–5pm, book studio tours ahead', 'gem', 90, 'approved'),

  ('11111111-1111-1111-1111-111111111105', 'The Quiet End, Two Rivers', 'Viewpoint', array['view','sunset','quiet','romantic'], 'Ruaka',
    ST_SetSRID(ST_MakePoint(36.7833, -1.2038), 4326)::geography, 0, 'Free', 60,
    'Past the crowds and the food court, a stretch of riverside path most visitors never reach.',
    'https://picsum.photos/seed/tworivers/900/700', array['https://picsum.photos/seed/tworivers2/700/700'],
    '6:00–6:45pm', 'Accessible during mall hours', 'gem', 86, 'approved'),

  ('11111111-1111-1111-1111-111111111106', 'Alchemist Bar', 'Nightlife', array['nightlife','music','social'], 'Westlands',
    ST_SetSRID(ST_MakePoint(36.8000, -1.2667), 4326)::geography, 2000, 'KSh 1,500–2,500', 180,
    'Shipping-container bar with a rotating cast of local DJs and food trucks.',
    'https://picsum.photos/seed/alchemist/900/700', array['https://picsum.photos/seed/alchemist2/700/700'],
    'From 8pm, Thu–Sat', 'Open till late Thu–Sun', 'popular', 79, 'approved'),

  ('11111111-1111-1111-1111-111111111107', 'Ngong Hills — Seven Sisters Ridge', 'Adventure', array['hike','adventure','outdoors','photo'], 'Ngong',
    ST_SetSRID(ST_MakePoint(36.6500, -1.3833), 4326)::geography, 400, 'KSh 400 entry', 300,
    'The full ridge walk across all seven peaks, with the Rift Valley dropping away on one side the whole way.',
    'https://picsum.photos/seed/ngonghills/900/700', array['https://picsum.photos/seed/ngonghills2/700/700'],
    'Start by 7am', 'Gate opens 6am', 'popular', 82, 'approved'),

  ('11111111-1111-1111-1111-111111111108', 'Paper & Fig', 'Café', array['cafe','quiet','coffee','romantic'], 'Kilimani',
    ST_SetSRID(ST_MakePoint(36.7872, -1.2921), 4326)::geography, 900, 'KSh 700–1,200', 90,
    'A tiny stationery shop with three tables in the back and a coffee list longer than the menu.',
    'https://picsum.photos/seed/paperfig/900/700', array['https://picsum.photos/seed/paperfig2/700/700'],
    '4:00–6:00pm', 'Open 8am–7pm, closed Sundays', 'gem', 93, 'approved'),

  ('11111111-1111-1111-1111-111111111109', 'Nairobi National Museum', 'Culture', array['culture','history','photo'], 'Museum Hill',
    ST_SetSRID(ST_MakePoint(36.8148, -1.2739), 4326)::geography, 1200, 'KSh 1,200', 150,
    'The Cradle of Mankind exhibit alone is worth the ticket — go on a weekday morning.',
    'https://picsum.photos/seed/museum/900/700', array['https://picsum.photos/seed/museum2/700/700'],
    'Weekday mornings', 'Open 8:30am–5:30pm daily', 'popular', 80, 'approved'),

  ('11111111-1111-1111-1111-111111111110', 'Rooftop at The Attic', 'Sunset', array['sunset','view','romantic','photo'], 'Lavington',
    ST_SetSRID(ST_MakePoint(36.7667, -1.2789), 4326)::geography, 1500, 'KSh 1,200–1,800', 120,
    'Unmarked door next to a dry cleaner, stairs up three floors, and then the whole western skyline opens up.',
    'https://picsum.photos/seed/attic/900/700', array['https://picsum.photos/seed/attic2/700/700'],
    '6:00–7:30pm', 'Open from 4pm, Wed–Sun', 'gem', 95, 'approved');
