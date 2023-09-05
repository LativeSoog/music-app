import { configureStore } from '@reduxjs/toolkit'
import audioPlayerReducer from './reducers/audioplayer'

export const store = configureStore({
  reducer: {
    AudioPlayer: audioPlayerReducer,
  },
})
