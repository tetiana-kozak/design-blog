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
      .get('https://run.mocky.io/v3/ce8ba2f6-ba0a-494c-9b9a-1135b74dfd80')
      // .get('https://run.mocky.io/v3/236dbed9-38a6-417d-a40e-5c799ad36c2b')
      .then((response) => response.data.articles)
      .catch((error) => console.log('error: ', error))
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
