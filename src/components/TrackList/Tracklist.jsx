import { styled } from 'styled-components'
import { Track, TrackLoading } from './Track.jsx'
import { useSelector } from 'react-redux'
import {
  audioPlayerCurrentPlaylist,
  audioPlayerGetTrackList,
} from '../../store/selectors/audioplayer.js'

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export function TrackList() {
  const trackListAll = useSelector(audioPlayerGetTrackList)
  const currentPlaylist = useSelector(audioPlayerCurrentPlaylist)

  return (
    <StyledContentPlaylist>
      {!currentPlaylist &&
        trackListAll.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
              title={track.name}
              titleSpan=""
              link={track.track_file}
              author={track.author}
              album={track.album}
              time={
                Math.floor(track.duration_in_seconds / 60) +
                ':' +
                (track.duration_in_seconds % 60)
              }
            />
          )
        })}
      {currentPlaylist === 1 && 'Здесь будут мои треки'}
    </StyledContentPlaylist>
  )
}

export function TrackListLoading(props) {
  return (
    <StyledContentPlaylist>
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
      <TrackLoading />
    </StyledContentPlaylist>
  )
}
