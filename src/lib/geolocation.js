// Wraps the browser's Geolocation API in a Promise that never rejects
// loudly — if permission is denied or it's unavailable, it resolves to
// null so callers can fall back gracefully instead of breaking.

export function getCurrentLocation({ timeout = 6000 } = {}) {
  return new Promise((resolve) => {
    if (!('geolocation' in navigator)) {
      resolve(null)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => resolve(null), // permission denied, timeout, or position unavailable
      { timeout, maximumAge: 5 * 60 * 1000 }
    )
  })
}
