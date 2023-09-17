import { styled } from 'styled-components'
import { Track } from '../TrackList/Track.jsx'
import { useGetCompilationIdQuery } from '../../services/audioplayer'

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export function CategoryTrackList({ params }) {
  const { data: currentCategory } = useGetCompilationIdQuery(Number(params.id))

  return (
    <StyledContentPlaylist>
      {currentCategory?.items?.map((track) => {
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
