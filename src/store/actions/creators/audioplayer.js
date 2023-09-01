import { SET_CURRENT_SONG } from '../type/audioplayer'

export const selectCurrentSong = (track) => ({
  type: SET_CURRENT_SONG,
  payload: track,
})
