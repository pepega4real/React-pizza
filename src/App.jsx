import './App.css'
import './scss/app.scss'

import Header from './components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { sortList } from './constants/filter'

import axios from 'axios'
import qs from 'qs'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from './redux/slices/filterSlice'

function App() {
  const navigate = useNavigate()
  const dispath = useDispatch()

  const [pizzaList, setPizzaList] = useState([])
  const [isPizzasLoaded, setIsPizzasLoaded] = useState(true)

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

  const fetchData = useCallback(async () => {
    setIsPizzasLoaded(true)

    const urlRequest = `https://658456004d1ee97c6bcf867b.mockapi.io/pizzas?page=${
      pageNumber + 1
    }&limit=8&sortBy=${sortType.sortParam}&order=${sortingOrder}&${
      activeCategory > 0 ? `type=${activeCategory}` : ''
    }`
    const response = await axios.get(urlRequest)

    setPizzaList(response.data)
    setIsPizzasLoaded(false)
  }, [activeCategory, sortType, sortingOrder, pageNumber])

  useEffect(() => {
    if (!isSearch.current) {
      fetchData()
    }

    isSearch.current = false
  }, [fetchData])

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
        <Route path='/' element={<Home pizzaList={pizzaList} isPizzasLoaded={isPizzasLoaded} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
