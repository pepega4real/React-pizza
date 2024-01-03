import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    setActiveCategory(state, action) {
      state.activeCategory = action.payload
    },
    setActiveSortIndex(state, action) {
      state.activeSortIndex = action.payload
    },
    setSortType(state, action) {
      state.sortType.sortParam = action.payload
    },
    setSortingOrder(state) {
      if (state.sortingOrder === 'asc') {
        state.sortingOrder = 'desc'
      } else {
        state.sortingOrder = 'asc'
      }
    },
    setSearchPizzasValue(state, action) {
      state.searchPizzasValue = action.payload
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload
    },
    setFilters(state, action) {
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
