import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoriesList: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  sortList: [
    { name: 'популярности', sortParam: 'popularity' },
    { name: 'цене', sortParam: 'price' },
    { name: 'алфавиту', sortParam: 'title' },
  ],
  sortingOrder: true,
  sortType: { name: 'популярности', sortParam: 'popularity' },
  activeCategory: 0,
  activeSortIndex: 0,
  searchPizzasValue: '',
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
      state.sortingOrder = !state.sortingOrder
    },
    setSearchPizzasValue(state, action) {
      state.searchPizzasValue = action.payload
    },
  },
})

export const {
  setActiveCategory,
  setActiveSortIndex,
  setSortType,
  setSortingOrder,
  setSearchPizzasValue,
} = filterSlice.actions

export default filterSlice.reducer
