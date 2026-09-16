import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { PLACES } from '../data/places.js'

export default function Saved() {
  const { saved } = useApp()
  const navigate = useNavigate()
  const places = PLACES.filter((p) => saved.includes(p.id))

  return (
    <div className="px-5 pt-8 rise-in">
      <h1 className="font-display text-2xl mb-1">Saved</h1>
      <p className="text-parchment-100/50 text-[13px] mb-6">Places you've tucked away for later.</p>

      {places.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-3xl mb-3">🤍</p>
          <p className="text-parchment-100/50 text-sm">Nothing saved yet — tap the heart on a place to keep it here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {places.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/place/${p.id}`)}
              className="tap w-full flex gap-3 bg-dusk-900 border border-dusk-700 rounded-2xl p-3 text-left"
            >
              <img src={p.hero} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="min-w-0">
                <p className="font-display text-[15px]">{p.name}</p>
                <p className="text-[12px] text-parchment-100/50 mt-0.5">{p.category} · {p.area}</p>
                <p className="text-[12px] text-savanna-400 mt-1">{p.costLabel}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
