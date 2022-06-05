import { createSlice } from '@reduxjs/toolkit'
const beersSlice = createSlice({
  name: 'beers',
  initialState: [],
  reducers: {
    beersSet(state, action) {
      let beers = action.payload.beers
      let favorites = action.payload.favorites
      beers.forEach(item => {
        favorites.forEach(el => {
          if(item.name === el.name) {
              item.isFavorite = true
          } else {
            item.favorite = false
          }
        })
      })
      state = beers
      return state
    },
    updateFavorites(state, action) {
      let name = action.payload
      state.forEach((element) => {
        if (element.name === name) {
          if (element.isFavorite) {
            element.isFavorite = false
          } else {
            element.isFavorite = true
          }
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