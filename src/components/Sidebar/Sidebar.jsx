import { PlayLists, PlayListsLoading } from './Playlists.jsx'
import * as S from './style.js'

export function Sidebar({ personalName, loadApp }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{personalName}</S.SidebarPersonalName>
        <S.SidebarAvatar></S.SidebarAvatar>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {loadApp ? (
            <PlayLists
              link=""
              urlImg="img/playlist01.png"
              altImg="day's playlist"
            />
          ) : (
            <PlayListsLoading />
          )}
          {loadApp ? (
            <PlayLists
              link=""
              urlImg="img/playlist02.png"
              altImg="day's playlist"
            />
          ) : (
            <PlayListsLoading />
          )}
          {loadApp ? (
            <PlayLists
              link=""
              urlImg="img/playlist03.png"
              altImg="day's playlist"
            />
          ) : (
            <PlayListsLoading />
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
