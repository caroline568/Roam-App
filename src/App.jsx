import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home.jsx'
import Feed from './components/Feed.jsx'
import PlaceDetail from './components/PlaceDetail.jsx'
import RoamMode from './components/RoamMode.jsx'
import SurpriseMe from './components/SurpriseMe.jsx'
import Saved from './components/Saved.jsx'
import History from './components/History.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function App() {
  const location = useLocation()
  const hideNav = location.pathname.startsWith('/place/')

  return (
    <div className="min-h-screen bg-dusk-950 text-parchment-50 flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
          <Route path="/roam-mode" element={<RoamMode />} />
          <Route path="/surprise" element={<SurpriseMe />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      {!hideNav && <BottomNav />}
    </div>
  )
}
