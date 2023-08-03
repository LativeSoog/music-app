import { NavMenu } from './components/NavMenu/NavMenu.jsx'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.jsx'
import { SectionTrackList } from './components/TrackList/SectionTrackList.jsx'
import { Sidebar } from './components/Sidebar/Sidebar.jsx'
import { useEffect, useState } from 'react'
import * as S from './style/AppStyle.js'
import { AppRoutes } from './routes.js'

function App() {
  const [loadApp, setLoadingApp] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingApp(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <S.StyLeGlobal />
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
          <S.Main>
            <NavMenu />
            <SectionTrackList loadApp={loadApp} />
            <Sidebar loadApp={loadApp} personalName="Sergey.Ivanov" />
          </S.Main>
          <AudioPlayer loadApp={loadApp} />
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
