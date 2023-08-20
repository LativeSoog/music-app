import * as S from './style.js'

export function Track({
  title,
  titleSpan,
  link,
  author,
  album,
  time,
  setCurrentSong,
}) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack
        onClick={() => {
          setCurrentSong({ title, author, link })
        }}
      >
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink href={link}>
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
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
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
