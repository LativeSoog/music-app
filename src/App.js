import './style/App.css'
import { NavMenu } from './components/NavMenu.js'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.js'
import { SectionTrackList } from './components/TrackList/SectionTrackList.js'
import { Sidebar } from './components/Sidebar/Sidebar.js'
import { useEffect, useState } from 'react'

function App() {
  const [loadApp, setLoadingApp] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingApp(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <SectionTrackList loadApp={loadApp} />
          <Sidebar loadApp={loadApp} personalName="Sergey.Ivanov" />
        </main>
        <AudioPlayer loadApp={loadApp} />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
