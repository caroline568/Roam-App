// Seed content for the Roam prototype. Mixes well-known Nairobi landmarks with
// invented small local spots — in a real build, the latter would come from
// verified user submissions (see PLACES[].community).

export const PLACES = [
  {
    id: 'p1',
    name: 'Cedar & Vine',
    category: 'Café',
    tags: ['cafe', 'quiet', 'coffee'],
    area: 'Karen',
    distanceKm: 3.4,
    cost: 700,
    costLabel: 'KSh 500–900',
    durationMin: 90,
    bestTime: '9:00–11:30am',
    hero: 'https://picsum.photos/seed/cedarvine/900/700',
    gallery: ['https://picsum.photos/seed/cedarvine2/700/700', 'https://picsum.photos/seed/cedarvine3/700/700'],
    description: 'A garden café tucked behind a hedge most people walk straight past — long tables under a fig tree, slow filter coffee, and a menu that changes with what the kitchen garden gives up.',
    discoveryType: 'gem',
    discoveryScore: 91,
    hoursNote: 'Open 7am–5pm, closed Mondays',
    community: [
      { name: 'Amani', photo: 'https://picsum.photos/seed/cedarvinecomm1/500/500', caption: 'Went before 10am like they say — worth it, had the whole garden to myself.', tags: ['Quiet', 'Great atmosphere'] },
      { name: 'Njeri', photo: 'https://picsum.photos/seed/cedarvinecomm2/500/500', caption: 'Their cardamom bun sold out by 10:30 so go early. Coffee is excellent.', tags: ['Great food', 'Good value'] },
    ],
  },
  {
    id: 'p2',
    name: 'Karura Forest — Waterfall Trail',
    category: 'Nature',
    tags: ['nature', 'hike', 'outdoors', 'active'],
    area: 'Karura',
    distanceKm: 6.1,
    cost: 600,
    costLabel: 'KSh 600 entry',
    durationMin: 150,
    bestTime: 'Before 9am or after 4pm',
    hero: 'https://picsum.photos/seed/karura/900/700',
    gallery: ['https://picsum.photos/seed/karura2/700/700', 'https://picsum.photos/seed/karura3/700/700'],
    description: 'A forest inside the city — the waterfall loop is the postcard shot, but the quieter bamboo trail ten minutes further in is where most visitors never make it.',
    discoveryType: 'popular',
    discoveryScore: 84,
    hoursNote: 'Open 6am–6pm daily',
    community: [
      { name: 'Brian', photo: 'https://picsum.photos/seed/karuracomm1/500/500', caption: 'Take the left fork after the falls — almost nobody does and it loops back through bamboo.', tags: ['Beautiful', 'Worth the trip'] },
    ],
  },
  {
    id: 'p3',
    name: 'Mama Chichi\'s',
    category: 'Street food',
    tags: ['food', 'street food', 'market'],
    area: 'Kawangware',
    distanceKm: 5.2,
    cost: 300,
    costLabel: 'Under KSh 400',
    durationMin: 45,
    bestTime: 'Lunchtime, 12–2pm',
    hero: 'https://picsum.photos/seed/mamachichi/900/700',
    gallery: ['https://picsum.photos/seed/mamachichi2/700/700'],
    description: 'No sign, no seats to speak of — a mabati stall doing the best mutura in the area, according to three separate boda riders we asked.',
    discoveryType: 'gem',
    discoveryScore: 88,
    hoursNote: 'Open until she sells out, usually by 3pm',
    community: [
      { name: 'Oscar', photo: 'https://picsum.photos/seed/mamachichicomm1/500/500', caption: 'Ask for it with extra kachumbari. Gone by 2:30 most days so don\'t sleep on lunch.', tags: ['Great food', 'Good value'] },
      { name: 'Faith', photo: 'https://picsum.photos/seed/mamachichicomm2/500/500', caption: 'My go-to when I\'m in the area. Cash only, small notes.', tags: ['Good value', 'Friendly'] },
    ],
  },
  {
    id: 'p4',
    name: 'Kitengela Glass',
    category: 'Culture',
    tags: ['culture', 'art', 'photo'],
    area: 'Kitengela',
    distanceKm: 28,
    cost: 1200,
    costLabel: 'KSh 1,000–1,500',
    durationMin: 240,
    bestTime: 'Afternoon, golden hour',
    hero: 'https://picsum.photos/seed/kitengela/900/700',
    gallery: ['https://picsum.photos/seed/kitengela2/700/700', 'https://picsum.photos/seed/kitengela3/700/700'],
    description: 'A whole compound built from recycled glass and mosaic, part sculpture garden, part working glass studio. Best in the last two hours of light.',
    discoveryType: 'gem',
    discoveryScore: 90,
    hoursNote: 'Open 9am–5pm, book studio tours ahead',
    community: [
      { name: 'Wanjiru', photo: 'https://picsum.photos/seed/kitengelacomm1/500/500', caption: 'Went for sunset — the whole place lights up orange through the glass walls.', tags: ['Beautiful', 'Worth the trip'] },
    ],
  },
  {
    id: 'p5',
    name: 'The Quiet End, Two Rivers',
    category: 'Viewpoint',
    tags: ['view', 'sunset', 'quiet', 'romantic'],
    area: 'Ruaka',
    distanceKm: 12,
    cost: 0,
    costLabel: 'Free',
    durationMin: 60,
    bestTime: '6:00–6:45pm',
    hero: 'https://picsum.photos/seed/tworivers/900/700',
    gallery: ['https://picsum.photos/seed/tworivers2/700/700'],
    description: 'Past the crowds and the food court, a stretch of riverside path most visitors never reach — usually near empty right when the light turns gold.',
    discoveryType: 'gem',
    discoveryScore: 86,
    hoursNote: 'Accessible during mall hours',
    community: [
      { name: 'Kevin', photo: 'https://picsum.photos/seed/tworiverscomm1/500/500', caption: 'Brought a blanket and just sat by the water. Nobody else out there at 6.', tags: ['Quiet', 'Great atmosphere'] },
      { name: 'Achieng', photo: 'https://picsum.photos/seed/tworiverscomm2/500/500', caption: 'Good spot for a first date that doesn\'t feel like a first date.', tags: ['Great atmosphere', 'Worth the trip'] },
    ],
  },
  {
    id: 'p6',
    name: 'Alchemist Bar',
    category: 'Nightlife',
    tags: ['nightlife', 'music', 'social'],
    area: 'Westlands',
    distanceKm: 4.8,
    cost: 2000,
    costLabel: 'KSh 1,500–2,500',
    durationMin: 180,
    bestTime: 'From 8pm, Thu–Sat',
    hero: 'https://picsum.photos/seed/alchemist/900/700',
    gallery: ['https://picsum.photos/seed/alchemist2/700/700'],
    description: 'Shipping-container bar with a rotating cast of local DJs and food trucks — feels like everyone\'s already a regular, in a good way.',
    discoveryType: 'popular',
    discoveryScore: 79,
    hoursNote: 'Open till late Thu–Sun',
    community: [
      { name: 'Dennis', photo: 'https://picsum.photos/seed/alchemistcomm1/500/500', caption: 'Thursdays are quieter and the DJ lineup is honestly better than weekends.', tags: ['Great atmosphere', 'Friendly'] },
    ],
  },
  {
    id: 'p7',
    name: 'Ngong Hills — Seven Sisters Ridge',
    category: 'Adventure',
    tags: ['hike', 'adventure', 'outdoors', 'photo'],
    area: 'Ngong',
    distanceKm: 32,
    cost: 400,
    costLabel: 'KSh 400 entry',
    durationMin: 300,
    bestTime: 'Start by 7am',
    hero: 'https://picsum.photos/seed/ngonghills/900/700',
    gallery: ['https://picsum.photos/seed/ngonghills2/700/700', 'https://picsum.photos/seed/ngonghills3/700/700'],
    description: 'The full ridge walk across all seven peaks, with the Rift Valley dropping away on one side the whole way. Longer than people expect — budget the full morning.',
    discoveryType: 'popular',
    discoveryScore: 82,
    hoursNote: 'Gate opens 6am',
    community: [
      { name: 'Peter', photo: 'https://picsum.photos/seed/ngongcomm1/500/500', caption: 'Wind picks up badly by midday — start early or you\'ll fight it the whole ridge.', tags: ['Worth the trip', 'Beautiful'] },
    ],
  },
  {
    id: 'p8',
    name: 'Paper & Fig',
    category: 'Café',
    tags: ['cafe', 'quiet', 'coffee', 'romantic'],
    area: 'Kilimani',
    distanceKm: 2.1,
    cost: 900,
    costLabel: 'KSh 700–1,200',
    durationMin: 90,
    bestTime: '4:00–6:00pm',
    hero: 'https://picsum.photos/seed/paperfig/900/700',
    gallery: ['https://picsum.photos/seed/paperfig2/700/700'],
    description: 'A tiny stationery shop with three tables in the back and a coffee list longer than the menu. Feels like nobody\'s told the internet about it yet.',
    discoveryType: 'gem',
    discoveryScore: 93,
    hoursNote: 'Open 8am–7pm, closed Sundays',
    community: [
      { name: 'Zawadi', photo: 'https://picsum.photos/seed/paperfigcomm1/500/500', caption: 'The owner will talk your ear off about the beans, in the best way.', tags: ['Friendly', 'Unique'] },
      { name: 'Musa', photo: 'https://picsum.photos/seed/paperfigcomm2/500/500', caption: 'Went on a whim after seeing it here — genuinely one of my favourite spots now.', tags: ['Unique', 'Worth the trip'] },
    ],
  },
  {
    id: 'p9',
    name: 'Nairobi National Museum',
    category: 'Culture',
    tags: ['culture', 'history', 'photo'],
    area: 'Museum Hill',
    distanceKm: 3.9,
    cost: 1200,
    costLabel: 'KSh 1,200',
    durationMin: 150,
    bestTime: 'Weekday mornings',
    hero: 'https://picsum.photos/seed/museum/900/700',
    gallery: ['https://picsum.photos/seed/museum2/700/700'],
    description: 'The Cradle of Mankind exhibit alone is worth the ticket — go on a weekday morning and you\'ll often have entire rooms to yourself.',
    discoveryType: 'popular',
    discoveryScore: 80,
    hoursNote: 'Open 8:30am–5:30pm daily',
    community: [
      { name: 'Linet', photo: 'https://picsum.photos/seed/museumcomm1/500/500', caption: 'The snake park next door is included and most people skip it — don\'t.', tags: ['Worth the trip', 'Good value'] },
    ],
  },
  {
    id: 'p10',
    name: 'Rooftop at The Attic',
    category: 'Sunset',
    tags: ['sunset', 'view', 'romantic', 'photo'],
    area: 'Lavington',
    distanceKm: 5.5,
    cost: 1500,
    costLabel: 'KSh 1,200–1,800',
    durationMin: 120,
    bestTime: '6:00–7:30pm',
    hero: 'https://picsum.photos/seed/attic/900/700',
    gallery: ['https://picsum.photos/seed/attic2/700/700'],
    description: 'Unmarked door next to a dry cleaner, stairs up three floors, and then the whole western skyline opens up. Not on any map yet.',
    discoveryType: 'gem',
    discoveryScore: 95,
    hoursNote: 'Open from 4pm, Wed–Sun',
    community: [
      { name: 'Tabitha', photo: 'https://picsum.photos/seed/atticcomm1/500/500', caption: 'Genuinely didn\'t know this existed until a friend sent it. Best sunset view I\'ve found in Nairobi.', tags: ['Beautiful', 'Unique'] },
      { name: 'Collins', photo: 'https://picsum.photos/seed/atticcomm2/500/500', caption: 'Small space so it fills up fast after 6:30 — go right at opening.', tags: ['Great atmosphere', 'Worth the trip'] },
    ],
  },
]

export function scorePlace(place, { vibe, time, budget }) {
  let score = 0
  if (vibe && vibe.tags?.some((t) => place.tags.includes(t))) score += 40
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

export function reasonFor(place, { vibe, time, budget }) {
  const reasons = []
  if (vibe && vibe.tags?.some((t) => place.tags.includes(t))) {
    reasons.push(`matches your ${vibe.label.toLowerCase()} mood`)
  }
  if (time && place.durationMin <= time.minutes) {
    reasons.push(`fits comfortably in your ${time.label.toLowerCase()}`)
  }
  if (budget && place.cost <= budget.max) {
    reasons.push(`within your budget`)
  }
  if (place.discoveryType === 'gem') {
    reasons.push('a hidden gem, not just another top-10 list entry')
  }
  if (reasons.length === 0) return 'A strong all-round pick nearby.'
  return reasons.slice(0, 2).join(' and ') + '.'
}
