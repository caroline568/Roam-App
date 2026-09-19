import { usePexelsImage } from '../lib/usePexelsImage.js'

// isReal photos (a user's own check-in upload) never get this label — they
// genuinely are the actual place. Everything sourced from Pexels is a
// stand-in until real community photos exist for that spot, and says so —
// pass the caller's sizing/rounding classes in `className`; they're applied
// to the clipping wrapper so the label and rounded corners both work.
export default function PlaceImage({ query, alt = '', className = '', labelSize = 'normal' }) {
  const url = usePexelsImage(query)
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={url} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      <span
        className={`absolute bottom-1 right-1 bg-dusk-950/70 backdrop-blur text-parchment-100/70 rounded-pill leading-none whitespace-nowrap ${
          labelSize === 'small' ? 'text-[7px] px-1 py-0.5' : 'text-[9.5px] px-2 py-1'
        }`}
      >
        Reference photo
      </span>
    </div>
  )
}
