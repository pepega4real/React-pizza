import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const updateCartPriceAndItems = (state: CartSliceState) => {
  state.totalCartItems = state.cartItemsList.reduce((total, cartItem) => total + cartItem.count, 0)
  state.totalCartPrice = state.cartItemsList.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.count,
    0
  )
}

type CartItem = {
  id: number
  title: string
  imgUrl: string
  price: number
  dought: string
  size: number
  count: number
}

interface CartSliceState {
  totalCartItems: number
  totalCartPrice: number
  cartItemsList: CartItem[]
}

const initialState: CartSliceState = {
  totalCartItems: 0,
  totalCartPrice: 0,
  cartItemsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItemsList(state, action: PayloadAction<CartItem>) {
      const findItem = state.cartItemsList.find((cartItem) => cartItem.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.cartItemsList.push({ ...action.payload, count: 1 })
      }

      updateCartPriceAndItems(state)
    },

    deleteCartItem(state, action: PayloadAction<number>) {
      const findItemId = state.cartItemsList.find((cartItem) => cartItem.id === action.payload)

      if (findItemId !== undefined) {
        if (findItemId.count > 1) {
          findItemId.count--
        } else {
          state.cartItemsList = state.cartItemsList.filter(
            (cartItem) => cartItem.id !== action.payload
          )
        }
      }

      updateCartPriceAndItems(state)
    },

    deleteAllSamePizza(state, action: PayloadAction<number>) {
      state.cartItemsList = state.cartItemsList.filter((cartItem) => cartItem.id !== action.payload)

      updateCartPriceAndItems(state)
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
