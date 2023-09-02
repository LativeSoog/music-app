import { SET_CURRENT_SONG, SET_IS_PLAYING } from '../actions/type/audioplayer'

const initialState = {
  isPlaying: false,
  currentSong: {},
}

export default function audioPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SONG:
      const track = action.payload
      return {
        ...state,
        isPlaying: !state.isPlaying,
        currentSong: track,
      }

    case SET_IS_PLAYING:
      const isPlaying = action.payload

      return {
        ...state,
        isPlaying: isPlaying,
      }

    default:
      return state
  }
}
