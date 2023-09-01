import { SET_CURRENT_SONG } from '../actions/type/audioplayer'

const initialState = {
  isPlaying: false,
  currentSong: {
    status: false,
  },
}

export default function audioPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SONG:
      const { title, author, link } = action.payload
      return {
        isPlaying: true,
        currentSong: {
          status: true,
          title: title,
          author: author,
          link: link,
        },
      }

    default:
      return state
  }
}
