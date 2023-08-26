import { CATEGORIES } from '../../constants.js'
import { PlayLists, PlayListsLoading } from './Playlists.jsx'
import * as S from './style.js'

export function Sidebar({ user, loadApp }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        {user && <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>}
        <S.SidebarAvatar></S.SidebarAvatar>
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
