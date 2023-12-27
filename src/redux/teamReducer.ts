import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type Team = {
  name: string
  position?: string
  photo?: string
  description?: string
}

const initialState: Team[] = []

export const fetchTeam = createAsyncThunk<Team[], undefined>(
  'team/fetchTeam',
  async () =>
    await axios
      .get('https://run.mocky.io/v3/aa3fa3b7-e30e-4f6b-b843-bed81aaaa241')
      .then((response) => response.data.team)
      .catch((error) => console.log('team error: ', error))
)

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchTeam.fulfilled,
      (state, action) => (state = action.payload)
    )
  },
})

export default teamSlice.reducer
