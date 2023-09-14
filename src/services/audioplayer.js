import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userAccessToken = JSON.parse(localStorage.getItem('user'))

export const audioPlayerApi = createApi({
  reducerPath: 'audioPlayerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (build) => ({
    getFavoriteTrack: build.query({
      query: () => ({
        url: 'catalog/track/favorite/all',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userAccessToken.token.access}`,
        },
      }),
    }),
  }),
})

export const { useGetFavoriteTrackQuery } = audioPlayerApi
