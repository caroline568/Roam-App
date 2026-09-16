import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { PLACES, scorePlace } from '../data/places.js'

export default function SurpriseMe() {
  const { session } = useApp()
  const navigate = useNavigate()
  const [revealed, setRevealed] = useState(false)

  const pick = useMemo(() => {
    const pool = PLACES.map((p) => ({ place: p, score: scorePlace(p, session || {}) + Math.random() * 15 }))
      .sort((a, b) => b.score - a.score)
    return pool[0]?.place
  }, [session])

  if (!session) {
    navigate('/')
    return null
  }

  return (
    <div className="px-5 pt-8 flex flex-col items-center text-center rise-in min-h-[70vh] justify-center">
      {!revealed ? (
        <>
          <p className="text-5xl mb-5">🎲</p>
          <h1 className="font-display text-2xl mb-2">We found something for you.</h1>
          <p className="text-parchment-100/60 text-[15px] mb-10 max-w-[26ch]">
            One strong pick, not a list to scroll through. Ready?
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="tap bg-savanna-500 text-dusk-950 font-display font-semibold text-lg rounded-2xl py-4 px-10"
          >
            Ready to Roam?
          </button>
        </>
      ) : (
        <div className="w-full rise-in">
          <img src={pick.hero} alt="" className="w-full h-56 object-cover rounded-card mb-5" />
          <h1 className="font-display text-2xl mb-1">{pick.name}</h1>
          <p className="text-parchment-100/50 text-sm mb-5">{pick.distanceKm} km away · {pick.costLabel}</p>
          <button
            onClick={() => navigate(`/place/${pick.id}`)}
            className="tap w-full bg-savanna-500 text-dusk-950 font-display font-semibold text-lg rounded-2xl py-4"
          >
            Go explore →
          </button>
        </div>
      )}
    </div>
  )
}
