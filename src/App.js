import './style/App.css'
import { NavMenu } from './components/NavMenu.js'
import { AudioPlayer } from './components/AudioPlayer.js'
import { SectionTrackList } from './components/SectionTrackList.js'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo"></img>
            </div>
            <div className="nav__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            <NavMenu />
          </nav>
          <SectionTrackList />
          <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
              <p className="sidebar__personal-name">Sergey.Ivanov</p>
              <div className="sidebar__avatar"></div>
            </div>
            <div className="sidebar__block">
              <div className="sidebar__list">
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist01.png"
                      alt="day's playlist"
                    ></img>
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist02.png"
                      alt="day's playlist"
                    ></img>
                  </a>
                </div>
                <div className="sidebar__item">
                  <a className="sidebar__link" href="#">
                    <img
                      className="sidebar__img"
                      src="img/playlist03.png"
                      alt="day's playlist"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
