import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PLACES, reasonFor } from '../data/places.js'
import { useApp } from '../context/AppContext.jsx'
import CheckInModal from './CheckInModal.jsx'

export default function PlaceDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const place = PLACES.find((p) => p.id === id)
  const { saved, toggleSaved, session, startExploration, explorations, checkIn, submitFeedback } = useApp()
  const [activeExplorationId, setActiveExplorationId] = useState(
    explorations.find((e) => e.placeId === id && e.status === 'active')?.id || null
  )
  const [showCheckIn, setShowCheckIn] = useState(false)

  if (!place) return <div className="p-6">Place not found.</div>
  const isSaved = saved.includes(place.id)
  const reason = session ? reasonFor(place, session) : null

  function handleGoExplore() {
    const exId = startExploration({ place, reason: reason || 'you tapped in from Saved' })
    setActiveExplorationId(exId)
  }

  function handleCheckIn() {
    setShowCheckIn(true)
  }

  function handleSubmitFeedback(feedback) {
    if (activeExplorationId) {
      checkIn(activeExplorationId)
      submitFeedback(activeExplorationId, feedback)
    }
    setShowCheckIn(false)
  }

  return (
    <div className="rise-in pb-6">
      <div className="relative h-72">
        <img src={place.hero} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk-950 via-dusk-950/10 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="tap absolute top-4 left-4 w-9 h-9 rounded-full bg-dusk-950/60 backdrop-blur flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={() => toggleSaved(place.id)}
          className="tap absolute top-4 right-4 w-9 h-9 rounded-full bg-dusk-950/60 backdrop-blur flex items-center justify-center"
        >
          {isSaved ? '❤️' : '🤍'}
        </button>
        {place.discoveryType === 'gem' && (
          <span className="absolute bottom-4 left-4 bg-savanna-500 text-dusk-950 text-[11px] font-semibold px-3 py-1.5 rounded-pill">
            💎 Roam Hidden Gem
          </span>
        )}
      </div>

      <div className="px-5 -mt-2">
        <h1 className="font-display text-[1.7rem] leading-tight">{place.name}</h1>
        <p className="text-parchment-100/50 text-sm mt-1">{place.category} · {place.area} · {place.distanceKm} km away</p>

        <div className="grid grid-cols-3 gap-2 my-5">
          <Stat label="Cost" value={place.costLabel} />
          <Stat label="Duration" value={`~${Math.round(place.durationMin / 60 * 10) / 10 || place.durationMin}${place.durationMin >= 60 ? 'h' : 'm'}`} />
          <Stat label="Best time" value={place.bestTime} small />
        </div>

        {reason && (
          <div className="bg-jacaranda-500/10 border border-jacaranda-500/30 rounded-2xl p-4 mb-5">
            <p className="text-[11px] uppercase tracking-wide text-jacaranda-400 font-semibold mb-1">Why Roam recommends this</p>
            <p className="text-[14px] text-parchment-50/90">Because it {reason}</p>
          </div>
        )}

        <p className="text-[15px] leading-relaxed text-parchment-100/80 mb-6">{place.description}</p>
        <p className="text-[13px] text-parchment-100/40 mb-6">{place.hoursNote}</p>

        {!activeExplorationId ? (
          <button onClick={handleGoExplore} className="tap w-full bg-savanna-500 text-dusk-950 font-display font-semibold text-lg rounded-2xl py-4 mb-3">
            Go explore →
          </button>
        ) : (
          <button onClick={handleCheckIn} className="tap w-full bg-acacia-500 text-parchment-50 font-display font-semibold text-lg rounded-2xl py-4 mb-3">
            I visited — check in
          </button>
        )}

        <hr className="border-dusk-700 my-7" />

        <CommunitySection place={place} />
      </div>

      {showCheckIn && (
        <CheckInModal placeName={place.name} onSubmit={handleSubmitFeedback} onClose={() => setShowCheckIn(false)} />
      )}
    </div>
  )
}

function Stat({ label, value, small }) {
  return (
    <div className="bg-dusk-900 border border-dusk-700 rounded-xl px-2.5 py-3 text-center">
      <p className="text-[10px] uppercase tracking-wide text-parchment-100/40 mb-1">{label}</p>
      <p className={`font-semibold ${small ? 'text-[11px]' : 'text-[13px]'}`}>{value}</p>
    </div>
  )
}

function CommunitySection({ place }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg">From explorers who've been</h2>
        <span className="text-[12px] text-parchment-100/40">{place.community.length} verified visits</span>
      </div>
      <div className="space-y-4">
        {place.community.map((c, i) => (
          <div key={i} className="flex gap-3">
            <img src={c.photo} alt="" className="w-16 h-16 rounded-xl object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-medium text-sm">{c.name}</span>
                <span className="text-[10px] text-acacia-400 bg-acacia-500/15 px-1.5 py-0.5 rounded-pill">✓ verified visit</span>
              </div>
              <p className="text-[13.5px] text-parchment-100/70 leading-snug">{c.caption}</p>
              <div className="flex gap-1.5 mt-1.5 flex-wrap">
                {c.tags.map((t) => (
                  <span key={t} className="text-[10.5px] text-parchment-100/40 bg-dusk-800 px-2 py-0.5 rounded-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
