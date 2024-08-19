import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import  restauranteSlice  from './slices/restauranteSlice'

export const store = configureStore({
  reducer: {
   cart: cartSlice,
   restaurant: restauranteSlice
  },
})