import { useEffect, useRef, useState } from 'react'
import * as S from './style.js'
import { ProgressBar } from './ProgressBar.jsx'
import { useSelector } from 'react-redux'
import { audioPlayerCurrentSong } from '../../store/selectors/audioplayer.js'

export function AudioPlayer({ loadApp }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)

  const currentSong = useSelector(audioPlayerCurrentSong)

  const btnBarPlay = () => {
    setIsPlaying(true)
    audioRef.current?.play()
  }

  const btnBarPause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }
  useEffect(btnBarPlay, [currentSong])

  const btnBarPrev = () => {
    alert('Ещё не реализовано')
  }

  const btnBarNext = () => {
    alert('Ещё не реализовано')
  }

  const btnBarRepeat = () => {
    isRepeat ? setIsRepeat(false) : setIsRepeat(true)
    isRepeat ? (audioRef.current.loop = false) : (audioRef.current.loop = true)
  }

  const btnBarSnuffle = () => {
    alert('Ещё не реализовано')
  }

  const btnBarVolume = (event) => {
    if (audioRef.current) {
      const volumeUserClick = event.target.value
      audioRef.current.volume = volumeUserClick
    }
  }

  const endTrack = () => {
    if (!isRepeat) {
      setIsPlaying(false)
    }
  }

  return (
    currentSong.status && (
      <S.Bar>
        <S.AudioComponent
          ref={audioRef}
          src={currentSong.link}
          onEnded={endTrack}
        ></S.AudioComponent>
        <S.BarContent>
          <ProgressBar audioRef={audioRef} />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev onClick={btnBarPrev}>
                  <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={isPlaying ? btnBarPause : btnBarPlay}>
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
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={btnBarRepeat}>
                  <S.PlayerBtnRepeatSvg alt="repeat">
                    <use
                      xlinkHref={`img/icon/sprite.svg#icon-${
                        isRepeat ? 'repeat-active' : 'repeat'
                      }`}
                    ></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnSnuffle onClick={btnBarSnuffle}>
                  <S.PlayerBtnSnuffleSvg alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnSnuffleSvg>
                </S.PlayerBtnSnuffle>
              </S.PlayerControls>

              <S.PlayerTrackPlay>
                {loadApp ? (
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://">
                        {currentSong.title}
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
                  <S.TrackPlayLike>
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike>
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
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
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
