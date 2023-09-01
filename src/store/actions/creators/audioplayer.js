import { SET_CURRENT_SONG } from '../type/audioplayer'

export const selectCurrentSong = (title, author, link) => ({
  type: SET_CURRENT_SONG,
  payload: {
    title: title,
    author: author,
    link: link,
  },
})
