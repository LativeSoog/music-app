import { Outlet } from 'react-router-dom'
import * as S from '../../style/AppStyle.js'
import { NavMenu } from '../NavMenu/NavMenu.jsx'
import { Sidebar } from '../Sidebar/Sidebar.jsx'
import { AudioPlayer } from '../AudioPlayer/AudioPlayer.jsx'
import { UserContext } from '../../contexts/userContext.jsx'
import { useContext } from 'react'

export function PageLayout({ setUser, loadApp }) {
  const user = useContext(UserContext)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu setUser={setUser} />

          <Outlet />

          <Sidebar loadApp={loadApp} user={user} />
        </S.Main>
        <AudioPlayer loadApp={loadApp} />
        <S.Footer></S.Footer>
      </S.Container>
    </S.Wrapper>
  )
}
