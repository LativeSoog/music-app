import { styled } from 'styled-components'
import { Track, TrackLoading } from './Track.jsx'
import { useSelector } from 'react-redux'
import {
  audioPlayerCurrentPlaylist,
  audioPlayerGetTrackList,
} from '../../store/selectors/audioplayer.js'
import {
  useGetAllTrackQuery,
  useGetFavoriteTrackQuery,
} from '../../services/audioplayer.js'

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export function TrackList() {
  const currentPlaylist = useSelector(audioPlayerCurrentPlaylist)

  const { data: trackList } = currentPlaylist
    ? useGetFavoriteTrackQuery()
    : useGetAllTrackQuery()

  return (
    <StyledContentPlaylist>
      {trackList?.map((track) => {
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
