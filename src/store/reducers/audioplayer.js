import {
  GET_TRACK_LIST_ALL,
  NEXT_TRACK,
  PREV_TRACK,
  SET_CURRENT_SONG,
  SET_IS_PLAYING,
} from '../actions/type/audioplayer'

const initialState = {
  isPlaying: false,
  tracklist: [],
  currentSong: {},
}

export default function audioPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACK_LIST_ALL:
      return {
        ...state,
        tracklist: action.payload,
      }

    case SET_CURRENT_SONG:
      return {
        ...state,
        isPlaying: !state.isPlaying,
        currentSong: action.payload,
      }

    case SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      }

    case NEXT_TRACK:
      return {
        ...state,
        currentSong: state.tracklist[action.payload],
      }

    case PREV_TRACK:
      return {
        ...state,
        currentSong: state.tracklist[action.payload],
      }

    default:
      return state
  }
}
