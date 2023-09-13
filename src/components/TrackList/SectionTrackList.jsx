import { TrackList, TrackListLoading } from './Tracklist.jsx'
import { SearchLine } from './SearchLine.jsx'
import { SearchTrack } from '../FilterTrack/FilterTrack.jsx'
import * as S from './style.js'
import { useSelector } from 'react-redux'
import { audioPlayerCurrentPlaylist } from '../../store/selectors/audioplayer.js'

export function SectionTrackList({ loadApp, isErrorApp }) {
  const currentPlaylist = useSelector(audioPlayerCurrentPlaylist)
  console.log(loadApp)

  return (
    <S.MainCenterBlock>
      <SearchLine />
      {currentPlaylist ? (
        <S.CenterBlockH2>Мои треки</S.CenterBlockH2>
      ) : (
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
      )}
      {currentPlaylist !== 1 && <SearchTrack />}
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
        {isErrorApp ? (
          'Не удалось загрузить плейлист, попробуйте позже'
        ) : loadApp ? (
          <TrackList />
        ) : (
          <TrackListLoading />
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}

export function SectionTrackListError() {
  return (
    <S.MainCenterBlock>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
    </S.MainCenterBlock>
  )
}
