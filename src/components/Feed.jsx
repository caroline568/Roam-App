import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { PLACES, scorePlace, reasonFor } from '../data/places.js'
import PlaceImage from './PlaceImage.jsx'

export default function Feed() {
  const { session, setSession } = useApp()
  const navigate = useNavigate()
  const [radiusBoost, setRadiusBoost] = useState(false)

  if (!session) {
    navigate('/')
    return null
  }

  const ranked = useMemo(() => {
    return PLACES.map((p) => ({ place: p, score: scorePlace(p, session) }))
      .filter((r) => radiusBoost || r.score > 10)
      .sort((a, b) => b.score - a.score)
  }, [session, radiusBoost])

  return (
    <div className="px-5 pt-6 rise-in">
      <div className="flex items-center justify-between mb-1">
        <button onClick={() => navigate('/')} className="text-parchment-100/50 text-sm">← Change mood</button>
      </div>
      <h1 className="font-display text-2xl mt-2 mb-1">
        {session.vibes.map((v) => v.icon).join(' ')} {session.vibes.map((v) => v.label).join(' + ')}
      </h1>
      <p className="text-parchment-100/50 text-[13px] mb-5">
        {session.time.label} · Up to KSh {session.budget.max === Infinity ? 'any' : session.budget.max}
      </p>

      {ranked.length === 0 ? (
        <EmptyState onExpand={() => setRadiusBoost(true)} onBack={() => navigate('/')} />
      ) : (
        <div className="space-y-4">
          {ranked.map(({ place }, i) => (
            <PlaceCard key={place.id} place={place} reason={reasonFor(place, session)} featured={i === 0} />
          ))}
        </div>
      )}
    </div>
  )
}

function PlaceCard({ place, reason, featured }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/place/${place.id}`)}
      className={`tap w-full text-left rounded-card overflow-hidden border border-dusk-700 bg-dusk-900 block ${featured ? '' : ''}`}
    >
      <div className={`relative ${featured ? 'h-52' : 'h-36'}`}>
        <PlaceImage query={place.heroQuery} className="w-full h-full" />
        {place.discoveryType === 'gem' && (
          <span className="absolute top-3 left-3 bg-savanna-500 text-dusk-950 text-[11px] font-semibold px-2.5 py-1 rounded-pill">
            💎 Hidden gem
          </span>
        )}
        <span className="absolute top-3 right-3 bg-dusk-950/70 backdrop-blur text-parchment-50 text-[11px] px-2.5 py-1 rounded-pill">
          {place.distanceKm} km
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg leading-snug">{place.name}</h3>
          <span className="text-savanna-400 text-[13px] font-medium shrink-0">{place.costLabel}</span>
        </div>
        <p className="text-parchment-100/50 text-[13px] mt-0.5">{place.category} · {place.area}</p>
        <p className="text-parchment-100/70 text-[13px] mt-2.5 italic">
          Roam picked this because it {reason}
        </p>
      </div>
    </button>
  )
}

function EmptyState({ onExpand, onBack }) {
  return (
    <div className="text-center py-16 px-4 rise-in">
      <p className="text-3xl mb-3">🧭</p>
      <h2 className="font-display text-xl mb-2">We couldn't find a perfect match nearby.</h2>
      <p className="text-parchment-100/50 text-sm mb-6">Try widening things a little.</p>
      <div className="flex flex-col gap-2 max-w-[220px] mx-auto">
        <button onClick={onExpand} className="tap bg-savanna-500 text-dusk-950 font-semibold rounded-2xl py-3 text-sm">
          Expand radius & budget
        </button>
        <button onClick={onBack} className="tap border border-dusk-700 text-parchment-100/70 rounded-2xl py-3 text-sm">
          Change vibe or time
        </button>
      </div>
    </div>
  )
}
