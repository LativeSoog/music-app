import { useEffect, useState } from 'react'
import * as S from './style.js'
import { formatTime } from '../../constants.js'

export function ProgressBar({ audioRef }) {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const btnClickProgressBar = (event) => {
    if (audioRef.current) {
      const currentTimeUserClick = event.target.value
      audioRef.current.currentTime = currentTimeUserClick
    }
  }

  useEffect(() => {
    const progressBarPlayer = audioRef.current

    if (progressBarPlayer) {
      const progressListening = () => {
        setDuration(progressBarPlayer.duration)
        setCurrentTime(progressBarPlayer.currentTime)
      }

      progressBarPlayer.addEventListener('timeupdate', progressListening)

      return () => {
        progressBarPlayer.removeEventListener('timeupdate', progressListening)
      }
    }
  }, [audioRef])

  return (
    <S.BarPlayerTimeProgress>
      {formatTime(currentTime) + ' / ' + formatTime(duration)}
      <S.BarPlayerProgress
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={btnClickProgressBar}
        $color="#B672FF"
      />
    </S.BarPlayerTimeProgress>
  )
}
