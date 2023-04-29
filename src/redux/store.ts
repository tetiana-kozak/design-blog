import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesReducer'
import selectedCategoryReducer from './selectedCategoryReducer'

export const store = configureStore({
  reducer: {
    favoriteArticles: favoritesReducer,
    selectedCategory: selectedCategoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
