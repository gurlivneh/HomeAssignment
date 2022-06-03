

import { createSlice } from '@reduxjs/toolkit'
const beersSlice = createSlice({
  name: 'beers',
  initialState: null,
  reducers: {
    beersSet(state, action) {
      state = action.payload
      console.log('userSet', state, action)
      return state
    },

  }
})

export const { beersSet } = beersSlice.actions
export default beersSlice.reducer