import { useState } from 'react'
import { FEEDBACK_OPTIONS, FEEDBACK_TAGS } from '../data/vibes.js'

export default function CheckInModal({ placeName, onSubmit, onClose }) {
  const [feeling, setFeeling] = useState(null)
  const [tags, setTags] = useState([])

  function toggleTag(tag) {
    setTags((t) => (t.includes(tag) ? t.filter((x) => x !== tag) : [...t, tag]))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-dusk-950/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-dusk-900 border-t border-dusk-700 rounded-t-[28px] p-6 pb-8 rise-in">
        <div className="w-10 h-1 bg-dusk-700 rounded-pill mx-auto mb-5" />
        <h2 className="font-display text-xl mb-1">How was {placeName}?</h2>
        <p className="text-parchment-100/50 text-sm mb-5">Your photos and notes help the next explorer decide.</p>

        <div className="flex gap-2 mb-5">
          {FEEDBACK_OPTIONS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFeeling(f.id)}
              className={`tap flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl border text-[11px] ${
                feeling === f.id ? 'bg-savanna-500/15 border-savanna-500' : 'bg-dusk-800 border-dusk-700'
              }`}
            >
              <span className="text-xl">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {FEEDBACK_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`tap px-3 py-1.5 rounded-pill text-[12px] border ${
                tags.includes(tag) ? 'bg-jacaranda-500/20 border-jacaranda-400' : 'bg-dusk-800 border-dusk-700 text-parchment-100/60'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="border border-dashed border-dusk-700 rounded-2xl p-4 mb-6 text-center">
          <p className="text-2xl mb-1">📷</p>
          <p className="text-[12.5px] text-parchment-100/50">
            Add a photo — captured in-app at check-in so it's tied to a real visit, not uploaded from your gallery.
          </p>
        </div>

        <div className="flex gap-2">
          <button onClick={onClose} className="tap flex-1 border border-dusk-700 rounded-2xl py-3.5 text-sm font-medium text-parchment-100/60">
            Skip
          </button>
          <button
            onClick={() => onSubmit({ feeling, tags })}
            disabled={!feeling}
            className="tap flex-1 bg-savanna-500 disabled:bg-dusk-700 disabled:text-parchment-100/30 text-dusk-950 rounded-2xl py-3.5 text-sm font-semibold"
          >
            Post to community
          </button>
        </div>
      </div>
    </div>
  )
}
