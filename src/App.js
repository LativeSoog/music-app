import './style/App.css'
import { NavMenu } from './components/NavMenu.js'
import { AudioPlayer } from './components/AudioPlayer.js'
import { SectionTrackList } from './components/SectionTrackList.js'
import { Sidebar } from './components/Sidebar.js'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <SectionTrackList />
          <Sidebar personalName="Sergey.Ivanov" />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
