import { configureStore } from '@reduxjs/toolkit'
import beersReducer from './reducers/beersReducer'


export const store = configureStore({
  reducer: {
    beers: beersReducer
  }
})