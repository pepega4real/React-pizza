import axios from 'axios'
import './App.css'
import Header from './components/Header'
import './scss/app.scss'
import { useCallback, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { useSelector } from 'react-redux'

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const [isPizzasLoaded, setIsPizzasLoaded] = useState(true)
  // const [searchPizzasValue, setSearchPizzasValue] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const { sortType, activeCategory, sortingOrder } = useSelector((state) => state.filter)

  const fetchData = useCallback(async () => {
    setIsPizzasLoaded(true)

    const urlRequest = `https://658456004d1ee97c6bcf867b.mockapi.io/pizzas?page=${
      pageNumber + 1
    }&limit=8&sortBy=${sortType.sortParam}&order=${sortingOrder ? 'asc' : 'desc'}&${
      activeCategory > 0 ? `type=${activeCategory}` : ''
    }`
    const response = await axios.get(urlRequest)

    setPizzaList(response.data)
    setIsPizzasLoaded(false)
  }, [activeCategory, sortType, sortingOrder, pageNumber])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              pizzaList={pizzaList}
              isPizzasLoaded={isPizzasLoaded}
              setPageNumber={setPageNumber}
            />
          }
        />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
