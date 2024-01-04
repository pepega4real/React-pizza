import qs from 'qs'
import { useEffect, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import './scss/app.scss'

import Header from './components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { sortList } from './constants/filter'
import { setFilters } from './redux/slices/filterSlice'
import { fetchPizza } from './redux/slices/pizzaSlice'

function App() {
  const navigate = useNavigate()
  const dispath = useDispatch()

  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const sortType = useSelector((state) => state.filter.sortType)
  const activeCategory = useSelector((state) => state.filter.activeCategory)
  const sortingOrder = useSelector((state) => state.filter.sortingOrder)
  const pageNumber = useSelector((state) => state.filter.pageNumber)

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find((sortObj) => sortObj.sortParam === params.sortBy)

      dispath(
        setFilters({
          ...params,
          sort,
        })
      )

      isSearch.current = true
    }
  }, [])

  dispath(fetchPizza({ pageNumber, sortType, sortingOrder, activeCategory }))

  useEffect(() => {
    if (!isSearch.current) {
      dispath(fetchPizza({ pageNumber, sortType, sortingOrder, activeCategory }))
    }

    isSearch.current = false
  }, [pageNumber, sortType, sortingOrder, activeCategory, dispath])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: pageNumber,
        sortBy: sortType.sortParam,
        order: sortingOrder,
        type: activeCategory,
      })

      navigate(`?${queryString}`)
    }

    isMounted.current = true
  }, [activeCategory, sortType.sortParam, sortingOrder, pageNumber, navigate])

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
