export const VIBES = [
  { id: 'slow-morning', label: 'Slow morning', icon: '☕', tags: ['cafe', 'quiet', 'coffee'] },
  { id: 'food', label: 'Food adventure', icon: '🍜', tags: ['food', 'market', 'street food'] },
  { id: 'nature', label: 'Nature', icon: '🌿', tags: ['nature', 'forest', 'outdoors'] },
  { id: 'culture', label: 'Culture', icon: '🎨', tags: ['culture', 'art', 'history'] },
  { id: 'photo', label: 'Photo hunt', icon: '📸', tags: ['view', 'photo', 'scenic'] },
  { id: 'adventure', label: 'Adventure', icon: '🥾', tags: ['hike', 'active', 'outdoors'] },
  { id: 'sunset', label: 'Sunset', icon: '🌅', tags: ['sunset', 'view', 'quiet'] },
  { id: 'night', label: 'Night out', icon: '🌙', tags: ['nightlife', 'music', 'social'] },
  { id: 'date', label: 'Date', icon: '❤️', tags: ['romantic', 'quiet', 'view'] },
  { id: 'surprise', label: 'Surprise me', icon: '🎲', tags: [] },
]

export const TIME_OPTIONS = [
  { id: '1h', label: '1 hour', minutes: 60 },
  { id: '2h', label: '2 hours', minutes: 120 },
  { id: '4h', label: '4 hours', minutes: 240 },
  { id: 'half', label: 'Half day', minutes: 360 },
  { id: 'full', label: 'Full day', minutes: 600 },
]

export const BUDGET_OPTIONS = [
  { id: 'free', label: 'Free', max: 0 },
  { id: 'u500', label: 'Under 500', max: 500 },
  { id: '500-1000', label: '500–1,000', max: 1000 },
  { id: '1000-2500', label: '1,000–2,500', max: 2500 },
  { id: '2500-5000', label: '2,500–5,000', max: 5000 },
  { id: 'flex', label: 'Flexible', max: Infinity },
]

export const FEEDBACK_OPTIONS = [
  { id: 'loved', label: 'Loved it', icon: '❤️' },
  { id: 'good', label: 'Good', icon: '👍' },
  { id: 'okay', label: 'Okay', icon: '😐' },
  { id: 'not-worth', label: 'Not worth it', icon: '👎' },
]

export const FEEDBACK_TAGS = [
  'Great food', 'Beautiful', 'Quiet', 'Unique', 'Good value',
  'Friendly', 'Great atmosphere', 'Worth the trip', 'Overrated', 'Too crowded',
]
