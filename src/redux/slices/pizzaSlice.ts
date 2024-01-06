import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type FetchPizzaArgs = {
  pageNumber: number
  sortType: {
    name: string
    sortParam: string
  }
  sortingOrder: string
  activeCategory: number
}

type pizzaSliceItem = {
  id: number
  title: string
  imgUrl: string
  price: number
  type: number
  popularity: number
}

export const fetchPizza = createAsyncThunk<pizzaSliceItem[], FetchPizzaArgs>(
  'pizza/fetchPizza',
  async (params) => {
    const { pageNumber, sortType, sortingOrder, activeCategory } = params

    const urlRequest = `https://658456004d1ee97c6bcf867b.mockapi.io/pizzas?page=${
      pageNumber + 1
    }&limit=8&sortBy=${sortType.sortParam}&order=${sortingOrder}&${
      activeCategory > 0 ? `type=${activeCategory}` : ''
    }`

    const response = await axios.get(urlRequest)

    return response.data
  }
)

interface PizzaSliceState {
  pizzaList: pizzaSliceItem[]
  isPizzaLoaded: boolean
}

const initialState: PizzaSliceState = {
  pizzaList: [],
  isPizzaLoaded: true,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.isPizzaLoaded = true
        state.pizzaList = []
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.pizzaList = action.payload
        state.isPizzaLoaded = false
      })
      .addCase(fetchPizza.rejected, (state) => {
        alert('Не удалось загрузить список пицц')
        state.isPizzaLoaded = false
        state.pizzaList = []
      })
  },
})

export default pizzaSlice.reducer
