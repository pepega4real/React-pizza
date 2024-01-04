import { createSlice } from '@reduxjs/toolkit'

const updateCartPriceAndItems = (state, action) => {
  state.totalCartItems = state.cartItemsList.reduce((total, cartItem) => total + cartItem.count, 0)
  state.totalCartPrice = state.cartItemsList.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.count,
    0
  )
}

const initialState = {
  totalCartItems: 0,
  totalCartPrice: 0,
  cartItemsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItemsList(state, action) {
      const findItem = state.cartItemsList.find((cartItem) => cartItem.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.cartItemsList.push({ ...action.payload, count: 1 })
      }

      updateCartPriceAndItems(state, action)
    },

    deleteCartItem(state, action) {
      const findItemId = state.cartItemsList.find((cartItem) => cartItem.id === action.payload)

      if (findItemId !== -1) {
        if (findItemId.count > 1) {
          findItemId.count--
        } else {
          state.cartItemsList = state.cartItemsList.filter(
            (cartItem) => cartItem.id !== action.payload
          )
        }
      }

      updateCartPriceAndItems(state, action)
    },

    deleteAllSamePizza(state, action) {
      state.cartItemsList = state.cartItemsList.filter((cartItem) => cartItem.id !== action.payload)

      updateCartPriceAndItems(state, action)
    },

    deleteCart(state) {
      state.cartItemsList = []

      updateCartPriceAndItems(state)
    },
  },
})

export const { setCartItemsList, deleteCartItem, deleteAllSamePizza, deleteCart } =
  cartSlice.actions

export default cartSlice.reducer
