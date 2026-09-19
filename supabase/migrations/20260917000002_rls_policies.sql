-- Roam: Row Level Security policies
-- These are what make "verified visit only" and "own data only" actually true
-- at the database level, not just something the app promises to check.

alter table public.profiles enable row level security;
alter table public.places enable row level security;
alter table public.explorations enable row level security;
alter table public.community_posts enable row level security;
alter table public.saved_places enable row level security;

-- ---------- PROFILES ----------
create policy "profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- ---------- PLACES ----------
create policy "approved places are viewable by everyone"
  on public.places for select
  using (status = 'approved');

create policy "authenticated users can submit a place"
  on public.places for insert
  to authenticated
  with check (submitted_by = auth.uid() and status = 'pending');

-- Note: no update/delete policy for regular users on purpose —
-- moderation (approve/reject) happens via the service role key
-- from an admin tool, not directly from the client.

-- ---------- EXPLORATIONS ----------
create policy "users can view their own explorations"
  on public.explorations for select
  using (auth.uid() = user_id);

create policy "users can start their own exploration"
  on public.explorations for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "users can update their own exploration (checkin/feedback)"
  on public.explorations for update
  using (auth.uid() = user_id);

-- ---------- COMMUNITY POSTS ----------
-- Public visibility, per the product decision: proof-of-visit photos need to
-- be seen by everyone browsing a place, not just people who've also been —
-- that's what makes them useful for deciding whether to go.
create policy "community posts are viewable by everyone"
  on public.community_posts for select
  using (true);

-- The critical rule: you can only INSERT a community post if the
-- exploration_id you're attaching it to (a) belongs to you, and
-- (b) is already marked 'visited'. This is enforced here, not just in
-- app code, so there is no code path — buggy or malicious — that lets
-- someone post a "verified visit" photo without an actual check-in.
create policy "can only post to a place you've actually checked into"
  on public.community_posts for insert
  to authenticated
  with check (
    exists (
      select 1 from public.explorations e
      where e.id = exploration_id
        and e.user_id = auth.uid()
        and e.status = 'visited'
    )
  );

-- ---------- SAVED PLACES ----------
create policy "users can view their own saved places"
  on public.saved_places for select
  using (auth.uid() = user_id);

create policy "users can save places"
  on public.saved_places for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "users can unsave places"
  on public.saved_places for delete
  using (auth.uid() = user_id);
