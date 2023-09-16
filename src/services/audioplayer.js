import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userAccessToken = JSON.parse(localStorage.getItem('user'))

const DATA_TAG = { type: 'Tracks', id: 'LIST' }

export const audioPlayerApi = createApi({
  reducerPath: 'audioPlayerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (build) => ({
    getAllTrack: build.query({
      query: () => ({
        url: 'catalog/track/all/',
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
    getFavoriteTrack: build.query({
      query: () => ({
        url: 'catalog/track/favorite/all',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userAccessToken.token.access}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
    addedFavoriteTrack: build.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAccessToken.token.access}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),
    deleteFavoriteTrack: build.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userAccessToken.token.access}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
})

export const {
  useGetAllTrackQuery,
  useGetFavoriteTrackQuery,
  useAddedFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} = audioPlayerApi
