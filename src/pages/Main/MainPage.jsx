import { useContext, useEffect, useState } from 'react'
import { NavMenu } from '../../components/NavMenu/NavMenu.jsx'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer.jsx'
import { SectionTrackList } from '../../components/TrackList/SectionTrackList.jsx'
import { Sidebar } from '../../components/Sidebar/Sidebar.jsx'
import * as S from '../../style/AppStyle.js'
import { UserContext } from '../../contexts/userContext.jsx'

export const MainPage = ({
  isErrorApp,
  currentSong,
  setCurrentSong,
  trackListAll,
}) => {
  const [loadApp, setLoadingApp] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingApp(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  const user = useContext(UserContext)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <SectionTrackList
            loadApp={loadApp}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            trackListAll={trackListAll}
            isErrorApp={isErrorApp}
          />
          <Sidebar loadApp={loadApp} user={user} />
        </S.Main>
        <AudioPlayer loadApp={loadApp} currentSong={currentSong} />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
