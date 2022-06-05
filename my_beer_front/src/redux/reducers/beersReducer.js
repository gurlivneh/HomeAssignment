import { createSlice } from '@reduxjs/toolkit'
const beersSlice = createSlice({
  name: 'beers',
  initialState: [],
  reducers: {
    beersSet(state, action) {
      state = action.payload
      return state
    },
    updateFavorites(state, action) {
      let id = action.payload
      state.forEach((element) => {
        if (element.id === id) {
          if (element.isFavorite) {
            element.isFavorite = false
          } else {
            element.isFavorite = true
          }
          return
        }
      })
      return state
    },
    removeAllFromFavorite(state, action) {
      state.forEach((element) => {
        element.isFavorite = false
      })
      return state
    },



  }
})

export const { beersSet, updateFavorites, removeAllFromFavorite } = beersSlice.actions
export default beersSlice.reducer