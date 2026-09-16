# Roam

**Discover the spots nobody's packaged into a tour.**

A working prototype of Roam — a mobile-first local discovery app for Nairobi, built around vibe-based recommendations and verified community photos, rather than competing with Airbnb/Viator/GetYourGuide on bookable guided experiences.

## What's built

- **Vibe → time → budget picker** (Home) that feeds a scored discovery feed
- **Discovery Feed** with a deterministic ranking system (`scorePlace` in `src/data/places.js`) and an explicit "why Roam recommends this" reason per place
- **Place Detail** — full info, save/unsave, "Go explore" → "I visited, check in" → feedback flow
- **Community proof-of-visit feed** — photos and notes are shown as tied to a verified check-in (marked "✓ verified visit"), not open reviews
- **Roam Mode** — builds a multi-stop route that respects a total time and budget budget, ordered with a simple itinerary UI
- **Surprise Me** — one strong pick instead of a list, with a reveal moment
- **Saved** and **My Explorations** (history + feedback given), persisted to `localStorage` so state survives a refresh

10 seed places across Nairobi (cafés, nature, street food, culture, nightlife, viewpoints) with mock community photos — see `src/data/places.js`. Swap this for a real API/database when you're ready to go beyond the prototype.

## What's intentionally NOT built yet (by design, for a first pass)

- No backend — everything runs client-side with seed data + localStorage
- No real photo capture / GPS verification — the check-in flow shows where that would plug in (see the note in `CheckInModal.jsx`)
- No business/experience marketplace or booking commission — Roam's positioning is discovery of the un-bookable long tail, not a booking engine
- No map view, no auth, no push notifications

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build, output in dist/
```

Requires Node 18+.

## Project structure

```
src/
  data/
    places.js       # seed places + scoring/reason logic
    vibes.js         # vibe, time, budget, and feedback option definitions
  context/
    AppContext.jsx   # saved places, exploration sessions, check-ins (localStorage)
  components/
    Home.jsx          # vibe/time/budget picker
    Feed.jsx           # discovery feed
    PlaceDetail.jsx    # place page + community section
    CheckInModal.jsx   # post-visit feedback sheet
    RoamMode.jsx        # multi-stop route builder
    SurpriseMe.jsx       # single strong pick
    Saved.jsx / History.jsx
    BottomNav.jsx
```

## Design

Custom token system in `tailwind.config.js` — a warm dark ("dusk") base rather than pure black, a savanna-gold primary accent, and a muted jacaranda-purple secondary, chosen to reflect Nairobi's own visual character (golden hour light, jacaranda season) rather than a generic travel-app palette. Display type is Fraunces (editorial serif), body/UI is Manrope.

## Where to go next

- Swap seed data for a real Places API + your own submitted-places database (PostGIS if you want proper geospatial queries later)
- Wire the check-in photo capture to the device camera + GPS, and check the coordinates against the place's listed location
- Build the business side: a simple dashboard for local spot owners to see how many people discovered/visited via Roam
- Replace the deterministic `scorePlace` ranking with a learned model once you have real behavioral data (saves, visits, skips)
