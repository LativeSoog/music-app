import { configureStore } from '@reduxjs/toolkit'
import audioPlayerReducer from './reducers/audioplayer'
import { audioPlayerApi } from '../services/audioplayer'

export const store = configureStore({
  reducer: {
    AudioPlayer: audioPlayerReducer,
    [audioPlayerApi.reducerPath]: audioPlayerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(audioPlayerApi.middleware),
})
