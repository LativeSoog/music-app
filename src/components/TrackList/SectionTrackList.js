import { TrackList, TrackListLoading } from './Tracklist.js'
import { SearchLine } from './SearchLine.js'
import { SearchTrack } from '../FilterTrack/FilterTrack.js'
import * as S from './style.jsx'

export function SectionTrackList({ loadApp }) {
  return (
    <S.MainCenterBlock>
      <SearchLine />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <SearchTrack />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.ContentCol1>Трек</S.ContentCol1>
          <S.ContentCol2>ИСПОЛНИТЕЛЬ</S.ContentCol2>
          <S.ContentCol3>АЛЬБОМ</S.ContentCol3>
          <S.ContentCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.ContentCol4>
        </S.ContentTitle>
        {loadApp ? <TrackList /> : <TrackListLoading />}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
