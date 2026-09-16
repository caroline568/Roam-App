import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

const STORAGE_KEY = 'roam-state-v1'

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { saved: [], explorations: [] }
    return JSON.parse(raw)
  } catch {
    return { saved: [], explorations: [] }
  }
}

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState)
  const [session, setSession] = useState(null) // { vibe, time, budget }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  function toggleSaved(placeId) {
    setState((s) => {
      const isSaved = s.saved.includes(placeId)
      return { ...s, saved: isSaved ? s.saved.filter((id) => id !== placeId) : [...s.saved, placeId] }
    })
  }

  function startExploration({ place, reason }) {
    const exploration = {
      id: `ex-${Date.now()}`,
      placeId: place.id,
      placeName: place.name,
      startedAt: new Date().toISOString(),
      reason,
      session,
      status: 'active',
      feedback: null,
    }
    setState((s) => ({ ...s, explorations: [exploration, ...s.explorations] }))
    return exploration.id
  }

  function checkIn(explorationId) {
    setState((s) => ({
      ...s,
      explorations: s.explorations.map((e) =>
        e.id === explorationId ? { ...e, status: 'visited', visitedAt: new Date().toISOString() } : e
      ),
    }))
  }

  function submitFeedback(explorationId, feedback) {
    setState((s) => ({
      ...s,
      explorations: s.explorations.map((e) =>
        e.id === explorationId ? { ...e, feedback } : e
      ),
    }))
  }

  const value = {
    saved: state.saved,
    explorations: state.explorations,
    toggleSaved,
    session,
    setSession,
    startExploration,
    checkIn,
    submitFeedback,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
