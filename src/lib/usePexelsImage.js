// Fetches one real photo from Pexels for a given search query, and caches
// the result in localStorage so the same place doesn't re-fetch every time
// you revisit it (Pexels free tier: 200 requests/hour, 20,000/month — plenty
// for a portfolio project, but no reason to waste calls on repeats).
//
// Setup: sign up free at https://www.pexels.com/api/ (no card required),
// then add to your .env:
//   VITE_PEXELS_API_KEY=your-key-here

import { useEffect, useState } from 'react'

const CACHE_KEY = 'roam-pexels-cache-v1'

function readCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) ?? {}
  } catch {
    return {}
  }
}

function writeCache(cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch {
    // localStorage full or unavailable — fine, just skip caching this run
  }
}

const FALLBACK = 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&w=900'

export function usePexelsImage(query, { width = 900 } = {}) {
  const [url, setUrl] = useState(() => readCache()[query] ?? null)

  useEffect(() => {
    if (!query || url) return
    const key = import.meta.env.VITE_PEXELS_API_KEY
    if (!key) {
      setUrl(FALLBACK)
      return
    }

    let cancelled = false
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`, {
      headers: { Authorization: key },
    })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        const photo = data?.photos?.[0]
        const found = photo?.src?.large ?? FALLBACK
        setUrl(found)
        const cache = readCache()
        cache[query] = found
        writeCache(cache)
      })
      .catch(() => {
        if (!cancelled) setUrl(FALLBACK)
      })

    return () => {
      cancelled = true
    }
  }, [query, url])

  return url ?? FALLBACK
}
