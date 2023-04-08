import { createSlice } from '@reduxjs/toolkit'

type FavoriteArticlesType = {
  [id: number]: boolean
}

export const initialState: FavoriteArticlesType = {}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleLike: (state, action) => ({
      ...state,
      [action.payload]: !state[action.payload],
    }),
  },
})

export const { toggleLike } = favoritesSlice.actions

export default favoritesSlice.reducer
