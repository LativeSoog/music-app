import { styled } from 'styled-components'
import { Track } from '../TrackList/Track.jsx'
import { useGetCompilationIdQuery } from '../../services/audioplayer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  audioPlayerChangedFilteredPlaylist,
  audioPlayerSetIsFilter,
} from '../../store/selectors/audioplayer.js'
import { changeFilteredPlaylist } from '../../store/actions/creators/audioplayer.js'

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export function CategoryTrackList({ params }) {
  const dispatch = useDispatch()
  const { data: currentCategory } = useGetCompilationIdQuery(Number(params.id))
  const stateFilters = useSelector(audioPlayerSetIsFilter)
  const filteredPlaylist = useSelector(audioPlayerChangedFilteredPlaylist)

  const trackList = currentCategory?.items

  useEffect(() => {
    if (trackList) {
      let newFilteredPlaylist = [...trackList]
      if (stateFilters.searchNameTrack.length) {
        newFilteredPlaylist = [
          ...trackList.filter((track) =>
            track.name
              .toLowerCase()
              .includes(stateFilters.searchNameTrack.toLowerCase()),
          ),
        ]
      }
      dispatch(changeFilteredPlaylist(newFilteredPlaylist))
    }
  }, [stateFilters, trackList])

  return (
    <StyledContentPlaylist>
      {stateFilters.status
        ? filteredPlaylist.map((track) => {
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
          })
        : currentCategory?.items?.map((track) => {
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
      {}
    </StyledContentPlaylist>
  )
}
