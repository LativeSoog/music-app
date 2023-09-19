import { useEffect, useRef, useState } from 'react'
import * as S from './style.js'
import { ProgressBar } from './ProgressBar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  audioPlayerCurrentSong,
  audioPlayerIsPlaying,
  audioPlayerSetActivePlaylist,
} from '../../store/selectors/audioplayer.js'
import {
  selectCurrentSong,
  setIsPlaying,
} from '../../store/actions/creators/audioplayer.js'
import { UserContext, useUserContext } from '../../contexts/userContext.jsx'
import {
  useAddedFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../../services/audioplayer.js'
import { useNavigate } from 'react-router-dom'

export function AudioPlayer({ loadApp }) {
  const user = useUserContext(UserContext)
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

  const currentSong = useSelector(audioPlayerCurrentSong)
  const isPlaying = useSelector(audioPlayerIsPlaying)
  const tracklist = useSelector(audioPlayerSetActivePlaylist)

  const dispatch = useDispatch()

  const shuffleTrackRandom = () => {
    const randomIndexTrack =
      Math.floor(Math.random() * (tracklist.length - 1 - 0 + 1)) + 0
    return randomIndexTrack
  }

  const btnBarPlay = () => {
    audioRef.current?.play()
    if (!isPlaying) {
      dispatch(setIsPlaying(true))
    }
  }

  const btnBarPause = () => {
    audioRef.current.pause()
  }
  useEffect(btnBarPlay, [currentSong])

  const btnBarPlayback = () => {
    isPlaying ? btnBarPause() : btnBarPlay()
    dispatch(setIsPlaying(isPlaying ? false : true))
  }

  const btnBarPrev = () => {
    if (currentSong) {
      const currentTrackIndex = tracklist.indexOf(currentSong)

      if (currentTrackIndex > 0) {
        const prevTrack = tracklist[currentTrackIndex - 1]
        dispatch(selectCurrentSong(prevTrack))
      }

      if (isShuffle) {
        const trackIndex = shuffleTrackRandom()
        const prevTrack = tracklist[trackIndex]
        dispatch(selectCurrentSong(prevTrack))
      }
    }
  }

  const btnBarNext = () => {
    if (currentSong) {
      const currentTrackIndex = tracklist.indexOf(currentSong)

      if (currentTrackIndex < tracklist.length - 1) {
        const nextTrack = tracklist[currentTrackIndex + 1]
        dispatch(selectCurrentSong(nextTrack))
      }

      if (isShuffle) {
        const trackIndex = shuffleTrackRandom()
        const nextTrack = tracklist[trackIndex]
        dispatch(selectCurrentSong(nextTrack))
      }
    }
  }

  const btnBarRepeat = () => {
    isRepeat ? setIsRepeat(false) : setIsRepeat(true)
    isRepeat ? (audioRef.current.loop = false) : (audioRef.current.loop = true)
  }

  const btnBarShuffle = () => {
    isShuffle ? setIsShuffle(false) : setIsShuffle(true)
  }

  const btnBarVolume = (event) => {
    if (audioRef.current) {
      const volumeUserClick = event.target.value
      audioRef.current.volume = volumeUserClick
    }
  }

  const endTrack = () => {
    if (!isRepeat) {
      btnBarNext()
    }
  }

  const handleLike = (e, id) => {
    e.stopPropagation()
    addTrackToFavorite(id)
  }

  const handleDislike = (e, id) => {
    e.stopPropagation()
    deleteTrackToFavorite(id)
  }

  const [addTrackToFavorite, { error: errorAddFavorite }] =
    useAddedFavoriteTrackMutation()
  const [deleteTrackToFavorite, { error: errorDelFavorite }] =
    useDeleteFavoriteTrackMutation()

  useEffect(() => {
    if (errorAddFavorite?.status === 401 || errorDelFavorite?.status === 401) {
      window.localStorage.removeItem('user')
      navigate('/login')
    }
  }, [errorAddFavorite, errorDelFavorite])

  return (
    currentSong.id && (
      <S.Bar>
        <S.AudioComponent
          ref={audioRef}
          src={currentSong.track_file}
          onEnded={endTrack}
        ></S.AudioComponent>
        <S.BarContent>
          <ProgressBar audioRef={audioRef} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={btnBarPrev}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={btnBarPlayback}>
                  <S.PlayerBtnPlaySvg alt="play">
                    <use
                      xlinkHref={`../img/icon/sprite.svg#icon-${
                        isPlaying ? 'pause' : 'play'
                      }`}
                    ></use>
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={btnBarNext}>
                  <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={btnBarRepeat}>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use
                      xlinkHref={`/img/icon/sprite.svg#icon-${
                        isRepeat ? 'repeat-active' : 'repeat'
                      }`}
                    ></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle onClick={() => btnBarShuffle()}>
                  <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use
                      xlinkHref={`/img/icon/sprite.svg#icon-${
                        isShuffle ? 'shuffle-active' : 'shuffle'
                      }`}
                    ></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                {loadApp ? (
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://">
                        {currentSong.name}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum>
                      <S.TrackPlayAlbumLink href="http://">
                        {currentSong.author}
                      </S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                ) : (
                  <AudioPlayerLoading />
                )}

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike
                    onClick={(e) => handleLike(e, currentSong.id)}
                  >
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike
                    onClick={(e) => handleDislike(e, currentSong.id)}
                  >
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress>
                  <S.VolumeProgressLine
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={btnBarVolume}
                  ></S.VolumeProgressLine>
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
  )
}

function AudioPlayerLoading() {
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage></S.TrackPlayImage>
      <S.TrackPlayAuthorSkeleton></S.TrackPlayAuthorSkeleton>
      <S.TrackPlayAlbumSkeleton></S.TrackPlayAlbumSkeleton>
    </S.TrackPlayContain>
  )
}
