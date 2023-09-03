import {
  GET_TRACK_LIST_ALL,
  NEXT_TRACK,
  PREV_TRACK,
  SET_CURRENT_SONG,
  SET_IS_PLAYING,
  SHUFFLE_TRACK,
} from '../type/audioplayer'

export const getTrackListAll = (tracklist) => ({
  type: GET_TRACK_LIST_ALL,
  payload: tracklist,
})

export const selectCurrentSong = (track) => ({
  type: SET_CURRENT_SONG,
  payload: track,
})

export const setIsPlaying = (isPlaying) => ({
  type: SET_IS_PLAYING,
  payload: isPlaying,
})

export const nextTrack = (nextTrackIndex) => ({
  type: NEXT_TRACK,
  payload: nextTrackIndex,
})

export const prevTrack = (prevTrackIndex) => ({
  type: PREV_TRACK,
  payload: prevTrackIndex,
})

export const shuffleTrack = (nextTrackIndex) => ({
  type: SHUFFLE_TRACK,
  payload: nextTrackIndex,
})