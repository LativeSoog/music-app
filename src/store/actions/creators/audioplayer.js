import {
  IS_LOADING_APP,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_IS_PLAYING,
} from '../type/audioplayer'

export const isLoadingApp = (status) => ({
  type: IS_LOADING_APP,
  payload: status,
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
