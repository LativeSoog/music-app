import * as S from '../Sidebar/style.jsx'

export function PlayLists({ link, urlImg, altImg }) {
  return (
    <S.SidebarItem>
      <S.SidebarLink href={link}>
        <S.SidebarImg src={urlImg} alt={altImg}></S.SidebarImg>
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

export function PlayListsLoading() {
  return <S.SidebarItemSkeleton></S.SidebarItemSkeleton>
}
