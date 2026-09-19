import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PLACES } from '../data/places.js'
import { TIME_OPTIONS, BUDGET_OPTIONS } from '../data/vibes.js'
import PlaceImage from './PlaceImage.jsx'

function buildRoute(time, budget) {
  const travelBufferPerStop = 20 // minutes
  let remaining = time.minutes
  let remainingBudget = budget.max === Infinity ? Infinity : budget.max
  const used = new Set()
  const stops = []

  const sorted = [...PLACES].sort((a, b) => a.durationMin - b.durationMin)

  for (const p of sorted) {
    const cost = p.durationMin + (stops.length > 0 ? travelBufferPerStop : 0)
    if (used.has(p.category)) continue
    if (cost > remaining) continue
    if (p.cost > remainingBudget) continue
    stops.push(p)
    used.add(p.category)
    remaining -= cost
    if (remainingBudget !== Infinity) remainingBudget -= p.cost
    if (stops.length >= 4) break
  }
  return stops
}

export default function RoamMode() {
  const navigate = useNavigate()
  const [time, setTime] = useState(TIME_OPTIONS[3])
  const [budget, setBudget] = useState(BUDGET_OPTIONS[3])
  const [route, setRoute] = useState(null)

  const totalCost = useMemo(() => route?.reduce((sum, p) => sum + p.cost, 0) ?? 0, [route])
  const totalTime = useMemo(
    () => (route?.length ? route.reduce((sum, p) => sum + p.durationMin, 0) + (route.length - 1) * 20 : 0),
    [route]
  )

  return (
    <div className="px-5 pt-6 rise-in">
      <button onClick={() => navigate('/')} className="text-parchment-100/50 text-sm mb-3">← Back</button>
      <h1 className="font-display text-2xl mb-1">Your Roam</h1>
      <p className="text-parchment-100/50 text-[13px] mb-6">A short route, planned for the time and budget you give it.</p>

      {!route ? (
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-parchment-100/70 mb-3">How much time do you have?</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {TIME_OPTIONS.map((t) => (
                <Chip key={t.id} active={time.id === t.id} onClick={() => setTime(t)}>{t.label}</Chip>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-parchment-100/70 mb-3">Budget (KSh)</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {BUDGET_OPTIONS.map((b) => (
                <Chip key={b.id} active={budget.id === b.id} onClick={() => setBudget(b)}>{b.label}</Chip>
              ))}
            </div>
          </div>
          <button
            onClick={() => setRoute(buildRoute(time, budget))}
            className="tap w-full bg-savanna-500 text-dusk-950 font-display font-semibold text-lg rounded-2xl py-4 mt-2"
          >
            Build my Roam
          </button>
        </div>
      ) : route.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-3xl mb-3">🧭</p>
          <h2 className="font-display text-xl mb-2">Not enough time or budget for a route yet.</h2>
          <button onClick={() => setRoute(null)} className="tap mt-4 border border-dusk-700 rounded-2xl px-6 py-3 text-sm">
            Adjust and try again
          </button>
        </div>
      ) : (
        <div className="rise-in">
          <div className="grid grid-cols-3 gap-2 mb-6">
            <Stat label="Stops" value={route.length} />
            <Stat label="Total time" value={`~${(totalTime / 60).toFixed(1)}h`} />
            <Stat label="Est. cost" value={`KSh ${totalCost}`} />
          </div>
          <div className="space-y-0">
            {route.map((p, i) => (
              <div key={p.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-jacaranda-500/20 border border-jacaranda-400 flex items-center justify-center text-[12px] font-semibold shrink-0">
                    {i + 1}
                  </div>
                  {i < route.length - 1 && <div className="w-px flex-1 bg-dusk-700 my-1" />}
                </div>
                <button
                  onClick={() => navigate(`/place/${p.id}`)}
                  className="tap flex-1 text-left bg-dusk-900 border border-dusk-700 rounded-2xl p-3.5 mb-4 flex gap-3"
                >
                  <PlaceImage query={p.heroQuery} className="w-16 h-16 rounded-xl shrink-0" labelSize="small" />
                  <div className="min-w-0">
                    <p className="font-display text-[15px] leading-snug">{p.name}</p>
                    <p className="text-[12px] text-parchment-100/50 mt-0.5">{p.bestTime}</p>
                    <p className="text-[12px] text-savanna-400 mt-0.5">{p.costLabel}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <button onClick={() => setRoute(null)} className="tap w-full border border-dusk-700 rounded-2xl py-3.5 text-sm text-parchment-100/60 mt-1">
            Build a different Roam
          </button>
        </div>
      )}
    </div>
  )
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`tap shrink-0 px-4 py-2 rounded-pill text-[13px] font-medium border ${
        active ? 'bg-jacaranda-500/20 border-jacaranda-400 text-parchment-50' : 'bg-dusk-900 border-dusk-700 text-parchment-100/70'
      }`}
    >
      {children}
    </button>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-dusk-900 border border-dusk-700 rounded-xl px-2 py-3 text-center">
      <p className="text-[10px] uppercase tracking-wide text-parchment-100/40 mb-1">{label}</p>
      <p className="text-[13px] font-semibold">{value}</p>
    </div>
  )
}
