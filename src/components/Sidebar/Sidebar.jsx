import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../constants.js'
import { PlayLists, PlayListsLoading } from './Playlists.jsx'
import * as S from './style.js'

export function Sidebar({ user, loadApp }) {
  const navigate = useNavigate()
  const btnLogout = () => {
    window.localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        {user && <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>}
        <S.SidebarLogoutBtn link="/login" onClick={btnLogout}>
          <use xlinkHref="/img/icon/sprite.svg#icon-logout"></use>
        </S.SidebarLogoutBtn>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {loadApp ? (
            CATEGORIES.map((category) => {
              return (
                <PlayLists
                  key={category.id}
                  link={`/category/${category.id}`}
                  urlImg={category.urlImg}
                  altImg={category.altImg}
                />
              )
            })
          ) : (
            <PlayListsLoading />
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
