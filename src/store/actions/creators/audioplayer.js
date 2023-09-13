import {
  GET_TRACK_LIST_ALL,
  IS_LOADING_APP,
  NEXT_TRACK,
  PREV_TRACK,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_IS_PLAYING,
  SHUFFLE_TRACK,
} from '../type/audioplayer'

export const isLoadingApp = (status) => ({
  type: IS_LOADING_APP,
  payload: status,
})

export const getTrackListAll = (tracklist) => ({
  type: GET_TRACK_LIST_ALL,
  payload: tracklist,
})

export const selectCurrentPlayList = (playlist) => ({
  type: SET_CURRENT_PLAYLIST,
  payload: playlist,
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

export const shuffleTrack = (trackIndex) => ({
  type: SHUFFLE_TRACK,
  payload: trackIndex,
})
