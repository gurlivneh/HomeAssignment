

import { createSlice } from '@reduxjs/toolkit'
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    favoritesAdd(state, action) {
      console.log('favoritesAdd', state, action)

      state.push(action.payload)
      return state
    },
    favoritesRemove(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          state.splice(i, 1);
          break;
        }
      }
      console.log('favoritesRemove', state, action)

      return state
    }
  }
})

export const { favoritesAdd, favoritesRemove } = favoritesSlice.actions
export default favoritesSlice.reducer