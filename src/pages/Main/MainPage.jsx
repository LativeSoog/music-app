import { useEffect, useState } from 'react'
import { NavMenu } from '../../components/NavMenu/NavMenu.jsx'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer.jsx'
import { SectionTrackList } from '../../components/TrackList/SectionTrackList.jsx'
import { Sidebar } from '../../components/Sidebar/Sidebar.jsx'
import * as S from '../../style/AppStyle.js'

export const MainPage = () => {
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
