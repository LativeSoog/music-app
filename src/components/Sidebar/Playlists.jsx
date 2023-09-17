import { useDispatch } from 'react-redux'
import * as S from './style.js'
import { setIsCompilation } from '../../store/actions/creators/audioplayer.js'

export function PlayLists({ link, urlImg, altImg }) {
  const dispatch = useDispatch()
  return (
    <S.SidebarItem
      onClick={() => {
        dispatch(setIsCompilation(true))
      }}
    >
      <S.SidebarLink to={link}>
        <S.SidebarImg src={urlImg} alt={altImg}></S.SidebarImg>
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

export function PlayListsLoading() {
  return <S.SidebarItemSkeleton></S.SidebarItemSkeleton>
}
