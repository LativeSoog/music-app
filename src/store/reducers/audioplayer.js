import {
  GET_TRACK_LIST_ALL,
  IS_LOADING_APP,
  NEXT_TRACK,
  PREV_TRACK,
  SET_CURRENT_SONG,
  SET_IS_PLAYING,
  SHUFFLE_TRACK,
} from '../actions/type/audioplayer'

const initialState = {
  isLoading: false,
  isPlaying: false,
  tracklist: [],
  currentSong: {},
}

export default function audioPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING_APP:
      return {
        ...state,
        isLoading: action.payload,
      }

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

    case SHUFFLE_TRACK:
      return {
        ...state,
        currentSong: state.tracklist[action.payload],
      }

    default:
      return state
  }
}
