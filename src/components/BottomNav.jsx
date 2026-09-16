import { NavLink } from 'react-router-dom'

const ITEMS = [
  { to: '/', label: 'Discover', icon: DiscoverIcon },
  { to: '/saved', label: 'Saved', icon: SavedIcon },
  { to: '/history', label: 'Explorations', icon: HistoryIcon },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40">
      <div className="max-w-md mx-auto px-4 pb-4">
        <div className="bg-dusk-900/95 backdrop-blur border border-dusk-700 rounded-pill shadow-soft flex items-center justify-around py-2.5 px-2">
          {ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-4 py-1 rounded-pill text-[11px] tap ${
                  isActive ? 'text-savanna-400' : 'text-parchment-100/50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon active={isActive} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

function DiscoverIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
      <path d="M14.5 9.5L13 13L9.5 14.5L11 11L14.5 9.5Z" fill="currentColor" />
    </svg>
  )
}
function SavedIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 4h12v16l-6-4-6 4V4Z" stroke="currentColor" strokeWidth={active ? 2 : 1.5} fill={active ? 'currentColor' : 'none'} />
    </svg>
  )
}
function HistoryIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
    </svg>
  )
}
