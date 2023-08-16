import { TrackList, TrackListLoading } from './Tracklist.jsx'
import { SearchLine } from './SearchLine.jsx'
import { SearchTrack } from '../FilterTrack/FilterTrack.jsx'
import * as S from './style.js'

export function SectionTrackList({ loadApp, currentSong, setCurrentSong }) {
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
        {loadApp ? (
          <TrackList
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        ) : (
          <TrackListLoading />
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
