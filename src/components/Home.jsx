import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VIBES, TIME_OPTIONS, BUDGET_OPTIONS } from '../data/vibes.js'
import { useApp } from '../context/AppContext.jsx'

const MOOD_VIBES = VIBES.filter((v) => v.id !== 'surprise')

export default function Home() {
  const navigate = useNavigate()
  const { setSession } = useApp()
  const [vibes, setVibes] = useState([]) // multi-select now
  const [time, setTime] = useState(TIME_OPTIONS[1])
  const [budget, setBudget] = useState(BUDGET_OPTIONS[3])

  function toggleVibe(v) {
    setVibes((current) =>
      current.some((c) => c.id === v.id) ? current.filter((c) => c.id !== v.id) : [...current, v]
    )
  }

  function handleRoam() {
    if (vibes.length === 0) return
    setSession({ vibes, time, budget })
    navigate('/feed')
  }

  function handleSurprise() {
    setSession({ vibes: [], time, budget })
    navigate('/surprise')
  }

  return (
    <div className="px-5 pt-8 rise-in">
      <header className="mb-8">
        <p className="text-savanna-400 text-sm font-medium tracking-wide">Nairobi</p>
        <h1 className="font-display text-[2.1rem] leading-tight mt-1">
          Where should you<br />actually go today?
        </h1>
        <p className="text-parchment-100/60 mt-3 text-[15px] leading-relaxed max-w-[30ch]">
          Not another list of ten cafés. Pick as many moods as fit — Roam blends them into one answer.
        </p>
      </header>

      <section className="mb-7">
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-sm font-semibold text-parchment-100/70">What's your vibe?</h2>
          {vibes.length > 0 && (
            <button onClick={() => setVibes([])} className="text-[12px] text-parchment-100/40">Clear</button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {MOOD_VIBES.map((v) => {
            const active = vibes.some((c) => c.id === v.id)
            return (
              <button
                key={v.id}
                onClick={() => toggleVibe(v)}
                className={`tap flex items-center gap-2.5 rounded-2xl px-3.5 py-3 text-left border transition-colors ${
                  active ? 'bg-savanna-500/15 border-savanna-500 text-parchment-50' : 'bg-dusk-900 border-dusk-700 text-parchment-100/80'
                }`}
              >
                <span className="text-lg leading-none">{v.icon}</span>
                <span className="text-[13.5px] font-medium">{v.label}</span>
                {active && <span className="ml-auto text-savanna-400 text-sm">✓</span>}
              </button>
            )
          })}
        </div>
      </section>

      {vibes.length > 0 && (
        <div className="rise-in">
          <section className="mb-6">
            <h2 className="text-sm font-semibold text-parchment-100/70 mb-3">How much time?</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {TIME_OPTIONS.map((t) => (
                <Chip key={t.id} active={time.id === t.id} onClick={() => setTime(t)}>
                  {t.label}
                </Chip>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-sm font-semibold text-parchment-100/70 mb-3">Budget (KSh)</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {BUDGET_OPTIONS.map((b) => (
                <Chip key={b.id} active={budget.id === b.id} onClick={() => setBudget(b)}>
                  {b.label}
                </Chip>
              ))}
            </div>
          </section>
        </div>
      )}

      <button
        onClick={handleRoam}
        disabled={vibes.length === 0}
        className="tap w-full bg-savanna-500 disabled:bg-dusk-700 disabled:text-parchment-100/30 text-dusk-950 font-display font-semibold text-lg rounded-2xl py-4 shadow-soft transition-colors"
      >
        Roam{vibes.length > 1 ? ` (${vibes.length} vibes)` : ''}
      </button>

      <div className="flex gap-3 mt-3">
        <button
          onClick={() => navigate('/roam-mode')}
          className="tap flex-1 border border-dusk-700 text-parchment-100/70 rounded-2xl py-3.5 text-sm font-medium"
        >
          Plan a full route →
        </button>
        <button
          onClick={handleSurprise}
          className="tap flex-1 border border-dusk-700 text-parchment-100/70 rounded-2xl py-3.5 text-sm font-medium"
        >
          🎲 Surprise me
        </button>
      </div>
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
