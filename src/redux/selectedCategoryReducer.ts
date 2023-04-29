import { createSlice } from '@reduxjs/toolkit'

export const initialState = 'all'

export const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    selectedCategoryState: (state, action) => action.payload,
  },
})

export const { selectedCategoryState } = selectedCategorySlice.actions

export default selectedCategorySlice.reducer
