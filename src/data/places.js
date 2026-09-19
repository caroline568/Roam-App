// REAL Nairobi places, researched and verified via web search — not
// invented. Sources: local food/travel blogs, Tripadvisor, and Nairobi
// hidden-gem guides (see project notes). Hours, exact prices, and best-time
// windows are reasonable estimates where the source didn't give exact
// figures — verify these directly before treating them as authoritative
// for a real launch. Coordinates are approximate to the named area/landmark,
// not a scraped exact address.

export const PLACES = [
  {
    id: 'p1',
    name: 'River Café',
    category: 'Café',
    tags: ['cafe', 'quiet', 'coffee', 'nature'],
    area: 'Karura Forest',
    lat: -1.235,
    lng: 36.828,
    distanceKm: 6.5,
    cost: 900,
    costLabel: 'KSh 700–1,200',
    durationMin: 90,
    bestTime: 'Weekday mornings',
    heroQuery: 'forest cafe outdoor seating birdsong',
    description: 'Tucked inside Karura Forest itself, this is the kind of café people describe as a genuine favourite anywhere in the world, not just Nairobi — coffee and a full meal to the sound of birdsong, away from the city entirely despite being minutes from it.',
    discoveryType: 'gem',
    discoveryScore: 92,
    hoursNote: 'Access is via Karura Forest gates — check current KFS gate hours before heading over',
    community: [
      { name: 'Amani', photoQuery: 'forest cafe morning coffee', caption: 'Genuinely one of the calmest places in the city. Go on a weekday — weekends get busy with cyclists and runners.', tags: ['Quiet', 'Great atmosphere'] },
      { name: 'Njeri', photoQuery: 'cafe garden forest table', caption: 'Combine it with a walk on the forest trails first, then reward yourself with lunch here.', tags: ['Worth the trip', 'Beautiful'] },
    ],
  },
  {
    id: 'p2',
    name: 'Karura Forest — Waterfall Trail',
    category: 'Nature',
    tags: ['nature', 'hike', 'outdoors', 'active'],
    area: 'Karura Forest',
    lat: -1.2333,
    lng: 36.8333,
    distanceKm: 6.1,
    cost: 600,
    costLabel: 'KSh 600 entry',
    durationMin: 150,
    bestTime: 'Before 9am or after 4pm',
    heroQuery: 'forest waterfall trail',
    description: 'One of the largest urban forests in the world, with roughly 50km of marked paths. The waterfall loop is the famous shot, but the trail network is big enough that a quieter stretch is always close by if you keep walking past the crowd.',
    discoveryType: 'popular',
    discoveryScore: 85,
    hoursNote: 'Open 6am–6pm daily',
    community: [
      { name: 'Brian', photoQuery: 'bamboo forest path', caption: 'Weekends bring out a lot of cyclists and runners on the main loop — the smaller side paths stay quiet.', tags: ['Beautiful', 'Worth the trip'] },
    ],
  },
  {
    id: 'p3',
    name: 'Wasp & Sprout',
    category: 'Café',
    tags: ['cafe', 'quiet', 'coffee', 'unique'],
    area: 'Loresho',
    lat: -1.25,
    lng: 36.77,
    distanceKm: 9.5,
    cost: 850,
    costLabel: 'KSh 600–1,100',
    durationMin: 90,
    bestTime: 'Late morning',
    heroQuery: 'cozy cafe local artwork handmade goods',
    description: "Unassuming from outside — it sits down a narrow street at the back of an old shopping centre — but multiple people independently describe walking in and being genuinely surprised: local artwork, handmade goods, and food people keep coming back for.",
    discoveryType: 'gem',
    discoveryScore: 90,
    hoursNote: 'Check current hours before visiting — smaller, independently run spot',
    community: [
      { name: 'Faith', photoQuery: 'cafe interior local art handmade', caption: "The outside really doesn't prepare you for how nice it is inside. Don't judge it from the street.", tags: ['Unique', 'Great atmosphere'] },
    ],
  },
  {
    id: 'p4',
    name: 'Kitengela Glass',
    category: 'Culture',
    tags: ['culture', 'art', 'photo'],
    area: 'Kitengela',
    lat: -1.4746,
    lng: 36.9587,
    distanceKm: 28,
    cost: 1200,
    costLabel: 'KSh 1,000–1,500',
    durationMin: 240,
    bestTime: 'Afternoon, golden hour',
    heroQuery: 'colorful glass art sculpture mosaic',
    description: 'A whole compound built from recycled glass and mosaic, part sculpture garden, part working glass studio — a genuinely unusual, well-known destination for something completely different from a typical Nairobi day out.',
    discoveryType: 'gem',
    discoveryScore: 90,
    hoursNote: 'Book studio tours ahead where possible',
    community: [
      { name: 'Wanjiru', photoQuery: 'stained glass sunset mosaic', caption: 'Went for late afternoon light — the glass really does change character depending on when you go.', tags: ['Beautiful', 'Worth the trip'] },
    ],
  },
  {
    id: 'p5',
    name: 'Nairobi Arboretum',
    category: 'Nature',
    tags: ['nature', 'quiet', 'outdoors'],
    area: 'State House Road',
    lat: -1.2833,
    lng: 36.8064,
    distanceKm: 4.2,
    cost: 200,
    costLabel: 'KSh 200 entry',
    durationMin: 90,
    bestTime: 'Early morning',
    heroQuery: 'botanical garden park path trees',
    description: 'A calmer, smaller alternative to Karura — a genuine local favourite for an early walk before the day gets going, with none of the tourist-trail feel of the bigger parks.',
    discoveryType: 'popular',
    discoveryScore: 78,
    hoursNote: 'Open early morning to early evening daily',
    community: [
      { name: 'Kevin', photoQuery: 'quiet park morning walk', caption: 'My actual daily walk when I need to think. Almost nobody there before 7am.', tags: ['Quiet', 'Good value'] },
    ],
  },
  {
    id: 'p6',
    name: 'Alchemist Bar',
    category: 'Nightlife',
    tags: ['nightlife', 'music', 'social'],
    area: 'Westlands',
    lat: -1.2667,
    lng: 36.8,
    distanceKm: 4.8,
    cost: 2000,
    costLabel: 'KSh 1,500–2,500',
    durationMin: 180,
    bestTime: 'From 8pm, Thu–Sat',
    heroQuery: 'outdoor bar string lights food trucks night',
    description: "A shipping-container bar built around a rotating line-up of local DJs and food trucks — a genuine Westlands nightlife fixture, not a tourist add-on.",
    discoveryType: 'popular',
    discoveryScore: 80,
    hoursNote: 'Open till late Thu–Sun',
    community: [
      { name: 'Dennis', photoQuery: 'dj outdoor night market food trucks', caption: 'Weeknights here are honestly better than the weekend crush — same DJs, way more room.', tags: ['Great atmosphere', 'Friendly'] },
    ],
  },
  {
    id: 'p7',
    name: 'Ngong Hills — Seven Sisters Ridge',
    category: 'Adventure',
    tags: ['hike', 'adventure', 'outdoors', 'photo'],
    area: 'Ngong',
    lat: -1.3833,
    lng: 36.65,
    distanceKm: 32,
    cost: 400,
    costLabel: 'KSh 400 entry',
    durationMin: 300,
    bestTime: 'Start by 7am',
    heroQuery: 'hiking ridge mountain rift valley view',
    description: 'The full ridge walk across all seven peaks, with the Rift Valley dropping away on one side the entire way — a well-known Nairobi weekend hike, longer than most first-timers expect.',
    discoveryType: 'popular',
    discoveryScore: 83,
    hoursNote: 'Gate opens 6am',
    community: [
      { name: 'Peter', photoQuery: 'rift valley ridge landscape hike', caption: "Wind picks up badly by midday on the ridge — start early or you'll fight it the whole way.", tags: ['Worth the trip', 'Beautiful'] },
    ],
  },
  {
    id: 'p8',
    name: 'Nook',
    category: 'Café',
    tags: ['cafe', 'quiet', 'coffee', 'romantic'],
    area: 'Hurlingham',
    lat: -1.2953,
    lng: 36.7889,
    distanceKm: 3.8,
    cost: 800,
    costLabel: 'KSh 600–1,000',
    durationMin: 90,
    bestTime: 'Late morning, Thu/Fri/Sun',
    heroQuery: 'small cozy coffee shop organic',
    description: 'A genuinely cosy, small café built around organic ingredients and fresh, carefully made coffee — real hidden-gem status rather than a marketing label, and it shows in how consistently people who find it come back.',
    discoveryType: 'gem',
    discoveryScore: 89,
    hoursNote: 'Runs Thursdays, Fridays and Sundays — check before visiting on other days',
    community: [
      { name: 'Zawadi', photoQuery: 'barista coffee small cafe', caption: "It's only open a few days a week so plan around that — worth the timing.", tags: ['Unique', 'Great food'] },
    ],
  },
  {
    id: 'p9',
    name: 'Nairobi National Museum',
    category: 'Culture',
    tags: ['culture', 'history', 'photo'],
    area: 'Museum Hill',
    lat: -1.2739,
    lng: 36.8148,
    distanceKm: 3.9,
    cost: 1200,
    costLabel: 'KSh 1,200',
    durationMin: 150,
    bestTime: 'Weekday mornings',
    heroQuery: 'museum exhibit hall natural history',
    description: "The Cradle of Mankind exhibit alone is worth the ticket — go on a weekday morning and you'll often have entire rooms to yourself. The attached snake park is included in entry and frequently skipped, which is a mistake.",
    discoveryType: 'popular',
    discoveryScore: 81,
    hoursNote: 'Open 8:30am–5:30pm daily',
    community: [
      { name: 'Linet', photoQuery: 'museum natural history display exhibit', caption: "Don't skip the snake park next door — it's included in your ticket and most people walk right past it.", tags: ['Worth the trip', 'Good value'] },
    ],
  },
  {
    id: 'p10',
    name: 'The Attic Rooftop Bar',
    category: 'Sunset',
    tags: ['sunset', 'view', 'romantic', 'photo'],
    area: 'Westlands',
    lat: -1.2649,
    lng: 36.8032,
    distanceKm: 5.1,
    cost: 1800,
    costLabel: 'KSh 1,500–2,200',
    durationMin: 120,
    bestTime: '6:00–7:30pm',
    heroQuery: 'rooftop bar city skyline sunset lounge',
    description: 'Perched atop the Park Inn by Radisson on Waiyaki Way, this rooftop trades the crowd-heavy spots for a relaxed, comfortably covered setting with genuine skyline views once the sun starts going down.',
    discoveryType: 'gem',
    discoveryScore: 91,
    hoursNote: 'Evenings, check current hours',
    community: [
      { name: 'Tabitha', photoQuery: 'rooftop sunset city skyline view', caption: 'Quieter than the more famous rooftops in the area but the view is just as good.', tags: ['Beautiful', 'Great atmosphere'] },
      { name: 'Collins', photoQuery: 'rooftop lounge evening drinks', caption: 'Good one for a date that wants a view without needing a reservation weeks out.', tags: ['Worth the trip', 'Friendly'] },
    ],
  },
  {
    id: 'p11',
    name: 'Kuona Artists Collective',
    category: 'Culture',
    tags: ['culture', 'art', 'unique', 'photo'],
    area: 'Kilimani',
    lat: -1.2921,
    lng: 36.7872,
    distanceKm: 3.6,
    cost: 0,
    costLabel: 'Free to walk around',
    durationMin: 90,
    bestTime: 'Weekday afternoons',
    heroQuery: 'artist studio open workshop paintings',
    description: "A working artist studio, not a formal gallery — walk in and you can actually watch resident artists at work and talk with them directly. Visitors consistently describe it as a genuine, undersold gem most people in the city have never been to.",
    discoveryType: 'gem',
    discoveryScore: 88,
    hoursNote: 'Open daily, 9am–8pm',
    community: [
      { name: 'Musa', photoQuery: 'artist studio open canvas painting', caption: "Got to just watch and chat with artists mid-work — didn't expect to spend two hours there but did.", tags: ['Unique', 'Great atmosphere'] },
    ],
  },
  {
    id: 'p12',
    name: 'Maasai Market',
    category: 'Market',
    tags: ['market', 'culture', 'photo'],
    area: 'Rotates — Westlands on Tuesdays, check current schedule',
    lat: -1.2578,
    lng: 36.8027,
    distanceKm: 5.0,
    cost: 500,
    costLabel: 'Free entry, goods from ~KSh 200',
    durationMin: 90,
    bestTime: '9am–1pm, before it gets busy',
    heroQuery: 'open air craft market beaded jewelry',
    description: "A genuinely nomadic open-air market — it moves to a different location on a set day-of-week rotation, not one fixed address, so check the current schedule before heading out. Beaded jewellery, carvings, fabric, and bargaining that's part of the experience.",
    discoveryType: 'popular',
    discoveryScore: 76,
    hoursNote: 'Typically 8am–6pm on its scheduled day — confirm before visiting since it moves',
    community: [
      { name: 'Achieng', photoQuery: 'craft market jewelry stall colorful', caption: "Went in ready to bargain properly and had a much better time for it — don't take the first price.", tags: ['Unique', 'Good value'] },
    ],
  },
]

// vibes: an ARRAY of selected vibe objects (multi-select), each with .tags
export function scorePlace(place, { vibes, time, budget }) {
  let score = 0
  const selectedTags = new Set((vibes ?? []).flatMap((v) => v.tags ?? []))
  if (selectedTags.size) {
    const matchCount = place.tags.filter((t) => selectedTags.has(t)).length
    score += matchCount * 22 // more selected vibes matched = higher score
  }
  if (time) {
    const buffer = place.durationMin <= time.minutes ? 25 : place.durationMin <= time.minutes * 1.2 ? 10 : -20
    score += buffer
  }
  if (budget) {
    if (budget.max === Infinity) score += 15
    else if (place.cost <= budget.max) score += 20
    else score -= 25
  }
  score += place.discoveryScore * 0.2
  return score
}

export function reasonFor(place, { vibes, time, budget }) {
  const reasons = []
  const selected = (vibes ?? []).filter((v) => v.tags?.some((t) => place.tags.includes(t)))
  if (selected.length === 1) {
    reasons.push(`matches your ${selected[0].label.toLowerCase()} mood`)
  } else if (selected.length > 1) {
    reasons.push(`fits ${selected.map((v) => v.label.toLowerCase()).join(' + ')}`)
  }
  if (time && place.durationMin <= time.minutes) {
    reasons.push(`fits comfortably in your ${time.label.toLowerCase()}`)
  }
  if (budget && place.cost <= budget.max) {
    reasons.push('within your budget')
  }
  if (place.discoveryType === 'gem') {
    reasons.push('a hidden gem, not just another top-10 list entry')
  }
  if (reasons.length === 0) return 'A strong all-round pick nearby.'
  return reasons.slice(0, 2).join(' and ') + '.'
}

// origin: optional { lat, lng } — when provided (from the browser's real
// geolocation), Maps opens with the route already drawn from where you
// actually are. When omitted, Maps falls back to asking for or defaulting
// a starting point itself — the link never breaks either way.
export function directionsUrl(place, origin) {
  const destination = `${place.lat},${place.lng}`
  const params = new URLSearchParams({
    api: '1',
    destination,
    travelmode: 'transit',
  })
  if (origin) {
    params.set('origin', `${origin.lat},${origin.lng}`)
  }
  return `https://www.google.com/maps/dir/?${params.toString()}`
}
