import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type filterUrl = {
  page: number
  sortBy: string
  order: string
  type: number
}

interface filterSliceState {
  sortingOrder: string
  sortType: {
    name: string
    sortParam: string
  }
  activeCategory: number
  activeSortIndex: number
  searchPizzasValue: string
  pageNumber: number
}

const initialState: filterSliceState = {
  sortingOrder: 'asc',
  sortType: { name: 'популярности', sortParam: 'popularity' },
  activeCategory: 0,
  activeSortIndex: 0,
  searchPizzasValue: '',
  pageNumber: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload
    },
    setActiveSortIndex(state, action: PayloadAction<number>) {
      state.activeSortIndex = action.payload
    },
    setSortType(state, action: PayloadAction<string>) {
      state.sortType.sortParam = action.payload
    },
    setSortingOrder(state) {
      if (state.sortingOrder === 'asc') {
        state.sortingOrder = 'desc'
      } else {
        state.sortingOrder = 'asc'
      }
    },
    setSearchPizzasValue(state, action: PayloadAction<string>) {
      state.searchPizzasValue = action.payload
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload
    },
    setFilters(state, action: PayloadAction<filterUrl>) {
      state.pageNumber = Number(action.payload.page) || 0
      state.sortType.sortParam = action.payload.sortBy || state.sortType.sortParam
      state.sortingOrder = action.payload.order || state.sortType.sortParam
      state.activeCategory = Number(action.payload.type) || 0
    },
  },
})

export const {
  setActiveCategory,
  setActiveSortIndex,
  setSortType,
  setSortingOrder,
  setSearchPizzasValue,
  setPageNumber,
  setFilters,
} = filterSlice.actions

export default filterSlice.reducer
