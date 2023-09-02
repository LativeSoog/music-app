import {
  GET_TRACK_LIST_ALL,
  NEXT_TRACK,
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
      const isPlaying = action.payload

      return {
        ...state,
        isPlaying: isPlaying,
      }

    case NEXT_TRACK:
      const nextTrackId = action.payload
      return {
        ...state,
        currentSong: {
          ...state.currentSong,
          track_file: nextTrackId,
        },
      }

    default:
      return state
  }
}
