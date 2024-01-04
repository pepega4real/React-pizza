import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pizzaList: [],
  isPizzaLoaded: true,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzaList(state, action) {
      state.pizzaList = action.payload
    },
    setIsPizzasLoaded(state, action) {
      state.isPizzaLoaded = action.payload
    },
  },
})

export const { setPizzaList, setIsPizzasLoaded } = pizzaSlice.actions

export default pizzaSlice.reducer
