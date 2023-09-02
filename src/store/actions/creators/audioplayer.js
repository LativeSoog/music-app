import {
  GET_TRACK_LIST_ALL,
  NEXT_TRACK,
  SET_CURRENT_SONG,
  SET_IS_PLAYING,
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

export const nextTrack = () => ({
  type: NEXT_TRACK,
  payload:
    'https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
})
