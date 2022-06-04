import { configureStore } from '@reduxjs/toolkit'
import beersReducer from './reducers/beersReducer'
import favoritesReducer from './reducers/favoritesReducer'


export const store = configureStore({
  reducer: {
    beers: beersReducer,
    favorites: favoritesReducer
  }
})