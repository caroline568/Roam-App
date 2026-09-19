import { useRef, useState } from 'react'
import { FEEDBACK_OPTIONS, FEEDBACK_TAGS } from '../data/vibes.js'

const MAX_PHOTOS = 5

export default function CheckInModal({ placeName, onSubmit, onClose }) {
  const [feeling, setFeeling] = useState(null)
  const [tags, setTags] = useState([])
  const [photos, setPhotos] = useState([]) // array of data URLs
  const [caption, setCaption] = useState('')
  const fileInputRef = useRef(null)

  function toggleTag(tag) {
    setTags((t) => (t.includes(tag) ? t.filter((x) => x !== tag) : [...t, tag]))
  }

  function handleFiles(e) {
    const files = Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS - photos.length)
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => setPhotos((p) => [...p, reader.result].slice(0, MAX_PHOTOS))
      reader.readAsDataURL(file)
    })
    e.target.value = '' // allow re-selecting the same file later
  }

  function removePhoto(index) {
    setPhotos((p) => p.filter((_, i) => i !== index))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-dusk-950/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-dusk-900 border-t border-dusk-700 rounded-t-[28px] p-6 pb-8 rise-in max-h-[90vh] overflow-y-auto">
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

        <div className="flex flex-wrap gap-2 mb-5">
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

        <p className="text-sm font-semibold text-parchment-100/70 mb-2">
          Photos ({photos.length}/{MAX_PHOTOS})
        </p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {photos.map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <button
                onClick={() => removePhoto(i)}
                className="tap absolute top-1 right-1 w-5 h-5 rounded-full bg-dusk-950/80 text-[11px] flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
          {photos.length < MAX_PHOTOS && (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="tap aspect-square rounded-xl border border-dashed border-dusk-700 flex flex-col items-center justify-center gap-1 text-parchment-100/40"
            >
              <span className="text-xl">＋</span>
              <span className="text-[10px]">Add</span>
            </button>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          capture="environment"
          onChange={handleFiles}
          className="hidden"
        />
        <p className="text-[11px] text-parchment-100/35 mb-5">
          Up to 5 photos of what you actually saw — take them now or pick from your gallery.
        </p>

        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What did you love about it? Anything the next person should know?"
          rows={3}
          className="w-full bg-dusk-800 border border-dusk-700 rounded-2xl p-3.5 text-[14px] text-parchment-50 placeholder:text-parchment-100/35 mb-6 resize-none"
        />

        <div className="flex gap-2">
          <button onClick={onClose} className="tap flex-1 border border-dusk-700 rounded-2xl py-3.5 text-sm font-medium text-parchment-100/60">
            Skip
          </button>
          <button
            onClick={() => onSubmit({ feeling, tags, photos, caption })}
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
