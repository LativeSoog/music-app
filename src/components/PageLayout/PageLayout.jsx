import { Outlet } from 'react-router-dom'
import * as S from '../../style/AppStyle.js'
import { NavMenu } from '../NavMenu/NavMenu.jsx'
import { Sidebar } from '../Sidebar/Sidebar.jsx'
import { AudioPlayer } from '../AudioPlayer/AudioPlayer.jsx'
import { UserContext } from '../../contexts/userContext.jsx'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { appIsLoading } from '../../store/selectors/audioplayer.js'

export function PageLayout({ setUser }) {
  const user = useContext(UserContext)
  const isLoading = useSelector(appIsLoading)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu setUser={setUser} />

          <Outlet />

          <Sidebar loadApp={isLoading} user={user} />
        </S.Main>
        <AudioPlayer loadApp={isLoading} />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
