import { styled } from 'styled-components'
import { Track, TrackLoading } from './Track.jsx'
import { useEffect, useState } from 'react'
import { getAllTrack } from '../../api.js'

const StyledContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export function TrackList(props) {
  const [trackListAll, setTrackListAll] = useState([])

  useEffect(() => {
    getAllTrack().then((trackList) => {
      setTrackListAll(trackList)
      console.log(trackList)
    })
  }, [])


  return (
    <StyledContentPlaylist>
      {trackListAll.map((track) => {
        return (
          <Track
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
