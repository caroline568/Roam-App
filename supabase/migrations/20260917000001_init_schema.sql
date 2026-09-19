-- Roam: initial schema
-- Run via `supabase db push` or as part of `supabase migration up`

create extension if not exists postgis;
create extension if not exists pgcrypto; -- for gen_random_uuid()

-- ============================================================
-- PROFILES (extends auth.users)
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  created_at timestamptz not null default now()
);

-- Auto-create a profile row whenever someone signs up via Supabase Auth
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- PLACES
-- ============================================================
create table public.places (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  tags text[] not null default '{}',
  area text,
  location geography(Point, 4326) not null,
  cost integer not null default 0,
  cost_label text,
  duration_min integer not null default 60,
  description text,
  hero_image_url text,
  gallery text[] default '{}',
  best_time text,
  hours_note text,
  discovery_type text not null default 'popular' check (discovery_type in ('gem', 'popular')),
  discovery_score integer not null default 50 check (discovery_score between 0 and 100),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  submitted_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create index places_location_idx on public.places using gist (location);
create index places_status_idx on public.places (status);
create index places_tags_idx on public.places using gin (tags);

-- ============================================================
-- EXPLORATIONS  (a user's "session" of heading to a place)
-- ============================================================
create table public.explorations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  place_id uuid not null references public.places(id) on delete cascade,
  vibe text,
  time_window text,
  budget_max integer,
  reason text,
  status text not null default 'active' check (status in ('active', 'visited')),
  feeling text check (feeling in ('loved', 'good', 'okay', 'not-worth')),
  feedback_tags text[] default '{}',
  started_at timestamptz not null default now(),
  visited_at timestamptz
);

create index explorations_user_idx on public.explorations (user_id);
create index explorations_place_idx on public.explorations (place_id);

-- ============================================================
-- COMMUNITY POSTS (proof-of-visit photos — one per exploration)
-- ============================================================
create table public.community_posts (
  id uuid primary key default gen_random_uuid(),
  exploration_id uuid not null unique references public.explorations(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  place_id uuid not null references public.places(id) on delete cascade,
  photo_url text not null,
  caption text,
  tags text[] default '{}',
  capture_lat double precision not null,
  capture_lng double precision not null,
  distance_from_place_m numeric,
  verified boolean not null default false,
  created_at timestamptz not null default now()
);

create index community_posts_place_idx on public.community_posts (place_id);

-- ============================================================
-- SAVED PLACES
-- ============================================================
create table public.saved_places (
  user_id uuid not null references public.profiles(id) on delete cascade,
  place_id uuid not null references public.places(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, place_id)
);
