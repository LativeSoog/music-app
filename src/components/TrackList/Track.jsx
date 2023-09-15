import { useDispatch, useSelector } from 'react-redux'
import * as S from './style.js'
import { selectCurrentSong } from '../../store/actions/creators/audioplayer.js'
import {
  audioPlayerCurrentSong,
  audioPlayerIsPlaying,
} from '../../store/selectors/audioplayer.js'
import {
  useAddedFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../services/audioplayer.js'
import { UserContext, useUserContext } from '../../contexts/userContext.jsx'

export function Track({ title, titleSpan, link, author, album, time, track }) {
  const currentSong = useSelector(audioPlayerCurrentSong)
  const isPlaying = useSelector(audioPlayerIsPlaying)
  const dispatch = useDispatch()

  const user = useUserContext(UserContext)

  const handleLike = (e, id) => {
    e.stopPropagation()
    addTrackToFavorite(id)
  }

  const handleDislike = (e, id) => {
    e.stopPropagation()
    deleteTrackToFavorite(id)
  }

  const [addTrackToFavorite] = useAddedFavoriteTrackMutation()
  const [deleteTrackToFavorite] = useDeleteFavoriteTrackMutation()

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack
        onClick={() => {
          dispatch(selectCurrentSong(track))
        }}
      >
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentSong.id === track.id && (
              <S.TrackTitleImageActive
                $isPlaying={isPlaying}
              ></S.TrackTitleImageActive>
            )}

            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink>
              {title} <S.TrackTitleSpan>{titleSpan}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href={link}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href={link}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          {track.stared_user?.find((userLike) => userLike.id === user.id) ? (
            <S.TrackTimeSvgLiked
              alt="time"
              onClick={(e) => {
                handleDislike(e, track.id)
              }}
            >
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvgLiked>
          ) : (
            <S.TrackTimeSvg
              alt="time"
              onClick={(e) => {
                handleLike(e, track.id)
              }}
            >
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
          )}
          <S.TrackTimeText>{time}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export function TrackLoading() {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImageSkeleton></S.TrackTitleImageSkeleton>
          <S.TrackTitleTextSkeleton></S.TrackTitleTextSkeleton>
        </S.TrackTitle>
        <S.TrackAuthorSkeleton></S.TrackAuthorSkeleton>
        <S.TrackAlbumSkeleton></S.TrackAlbumSkeleton>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
