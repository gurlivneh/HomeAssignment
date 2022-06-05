

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
    favoritesDeleteAll(state, action) {
      state = []
      return state
    },
    favoriteGrade(state, action) {
      console.log("fav grade", action.payload)
      for (let i = 0; i < state.length; i++) {
        if (state[i].name === action.payload.name) {
          console.log('state[i].name', state[i].name)

          state[i].grade = action.payload.grade
          console.log(state[i].grade)
          break;
        }
      }
      
      return state
    },
    
    favoritesRemove(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].name === action.payload) {
          state.splice(i, 1);
          break;
        }
      }
      
      return state
    }
  }
})

export const { favoritesAdd, favoritesRemove, favoritesDeleteAll, favoriteGrade} = favoritesSlice.actions
export default favoritesSlice.reducer