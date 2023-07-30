import './style/App.css'
import { NavMenu } from './components/NavMenu/NavMenu.js'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.js'
import { SectionTrackList } from './components/TrackList/SectionTrackList.js'
import { Sidebar } from './components/Sidebar/Sidebar.js'
import { useEffect, useState } from 'react'
import * as S from './style/AppStyle.jsx'

function App() {
  const [loadApp, setLoadingApp] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingApp(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <SectionTrackList loadApp={loadApp} />
          <Sidebar loadApp={loadApp} personalName="Sergey.Ivanov" />
        </S.Main>
        <AudioPlayer loadApp={loadApp} />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}

export default App
