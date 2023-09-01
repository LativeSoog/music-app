import { SET_CURRENT_SONG } from '../actions/type/audioplayer'

const initialState = {
  isPlaying: false,
  currentSong: {},
}

export default function audioPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SONG:
      const track = action.payload
      return {
        isPlaying: true,
        currentSong: track,
      }

    default:
      return state
  }
}
