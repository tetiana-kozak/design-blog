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
      .get('https://run.mocky.io/v3/96433b00-81f5-40cc-9bb6-f166d4e0c2dd')
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
