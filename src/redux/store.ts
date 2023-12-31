import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import filter from './slices/filterSlice'
import pizza from './slices/pizzaSlice'

export const store = configureStore({
  reducer: {
    filter,
    pizza,
    cart,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
