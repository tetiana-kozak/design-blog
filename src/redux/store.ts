import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesReducer'
import selectedCategoryReducer from './selectedCategoryReducer'
import articlesReducer from './articlesReducer'
import teamReducer from './teamReducer'

export const store = configureStore({
  reducer: {
    favoriteArticles: favoritesReducer,
    selectedCategory: selectedCategoryReducer,
    fetchedArticles: articlesReducer,
    fetchedTeam: teamReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
