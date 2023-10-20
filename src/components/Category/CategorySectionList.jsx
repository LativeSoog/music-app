import * as S from '../TrackList/style.js'
import { CategoryTrackList } from './CategoryTrackList.jsx'
import { SearchLine } from '../TrackList/SearchLine.jsx'
import { useGetCompilationIdQuery } from '../../services/audioplayer.js'

export function CategorySectionList({ params }) {
  const { data: currentCategory } = useGetCompilationIdQuery(Number(params.id))
  return (
    <S.MainCenterBlock>
      <SearchLine />
      <S.CenterBlockH2>{currentCategory?.name}</S.CenterBlockH2>
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.ContentCol1>Трек</S.ContentCol1>
          <S.ContentCol2>ИСПОЛНИТЕЛЬ</S.ContentCol2>
          <S.ContentCol3>АЛЬБОМ</S.ContentCol3>
          <S.ContentCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.ContentCol4>
        </S.ContentTitle>
        <CategoryTrackList params={params} />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
