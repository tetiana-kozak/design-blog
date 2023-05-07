import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesReducer'
import selectedCategoryReducer from './selectedCategoryReducer'
import articlesReducer from './articlesReducer'

export const store = configureStore({
  reducer: {
    favoriteArticles: favoritesReducer,
    selectedCategory: selectedCategoryReducer,
    fetchedArticles: articlesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
