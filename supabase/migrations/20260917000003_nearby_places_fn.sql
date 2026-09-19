-- Roam: helper function for radius search using PostGIS.
-- Called from the get-recommendations Edge Function via supabase.rpc().

create or replace function public.nearby_places(
  user_lat double precision,
  user_lng double precision,
  radius_km double precision default 40
)
returns setof public.places
language sql
stable
as $$
  select p.*
  from public.places p
  where p.status = 'approved'
    and ST_DWithin(
      p.location,
      ST_SetSRID(ST_MakePoint(user_lng, user_lat), 4326)::geography,
      radius_km * 1000
    )
  order by ST_Distance(p.location, ST_SetSRID(ST_MakePoint(user_lng, user_lat), 4326)::geography);
$$;
