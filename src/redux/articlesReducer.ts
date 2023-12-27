import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type Article = {
  title: string
  description: string
  category: string
  mainImage: string
  id: number
  heading: string
  images?: string[]
  content?: string[]
  date?: string
  author?: string
  photographer?: string
}

const initialState: Article[] = []

export const fetchArticles = createAsyncThunk<Article[], undefined>(
  'articles/fetchArticles',
  async () =>
    await axios
      .get('https://run.mocky.io/v3/58154f7a-c03a-41f4-a8a1-6b38956cf38d')
      .then((response) => response.data.articles)
      .catch((error) => console.log('articles error: ', error))
)

export const getArticlesObject = (array: Article[]) =>
  array.reduce(
    (object, article) => ({
      ...object,
      [article.id]: article,
    }),
    {}
  )

export const articlesSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action) => (state = action.payload)
    )
  },
})

export default articlesSlice.reducer
