import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesReducer'

export const store = configureStore({
  reducer: {
    favoriteArticles: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
