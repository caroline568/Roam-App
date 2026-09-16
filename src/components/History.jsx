import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { PLACES } from '../data/places.js'
import { FEEDBACK_OPTIONS } from '../data/vibes.js'

export default function History() {
  const { explorations } = useApp()
  const navigate = useNavigate()

  return (
    <div className="px-5 pt-8 rise-in">
      <h1 className="font-display text-2xl mb-1">My Explorations</h1>
      <p className="text-parchment-100/50 text-[13px] mb-6">Everywhere Roam has sent you.</p>

      {explorations.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-3xl mb-3">🧭</p>
          <p className="text-parchment-100/50 text-sm">No explorations yet — pick a vibe and go find somewhere.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {explorations.map((e) => {
            const place = PLACES.find((p) => p.id === e.placeId)
            const feeling = FEEDBACK_OPTIONS.find((f) => f.id === e.feedback?.feeling)
            return (
              <button
                key={e.id}
                onClick={() => navigate(`/place/${e.placeId}`)}
                className="tap w-full flex gap-3 bg-dusk-900 border border-dusk-700 rounded-2xl p-3 text-left"
              >
                {place && <img src={place.hero} alt="" className="w-16 h-16 rounded-xl object-cover shrink-0" />}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-[15px]">{e.placeName}</p>
                    {feeling && <span className="text-lg">{feeling.icon}</span>}
                  </div>
                  <p className="text-[12px] text-parchment-100/50 mt-0.5">
                    {e.status === 'visited' ? 'Visited' : 'In progress'} · {new Date(e.startedAt).toLocaleDateString()}
                  </p>
                  {e.reason && <p className="text-[12px] text-parchment-100/40 italic mt-1">Because it {e.reason}</p>}
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
