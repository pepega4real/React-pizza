import axios from 'axios'
import './App.css'
import Header from './components/Header'
import './scss/app.scss'
import { useCallback, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const [isPizzasLoaded, setIsPizzasLoaded] = useState(true)
  const [searchPizzasValue, setSearchPizzasValue] = useState('')
  const [activeSortIndex, setActiveSortIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)
  const [sortType, setSortType] = useState({ name: 'популярности', sortParam: 'popularity' })
  const [sortingOrder, setSortingOrder] = useState(true)
  const [pageNumber, setPageNumber] = useState(0)

  const sortList = [
    { name: 'популярности', sortParam: 'popularity' },
    { name: 'цене', sortParam: 'price' },
    { name: 'алфавиту', sortParam: 'title' },
  ]
  const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

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
      <Header searchPizzasValue={searchPizzasValue} setSearchPizzasValue={setSearchPizzasValue} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              searchPizzasValue={searchPizzasValue}
              pizzaList={pizzaList}
              isPizzasLoaded={isPizzasLoaded}
              categoriesList={categoriesList}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              sortList={sortList}
              activeSortIndex={activeSortIndex}
              setActiveSortIndex={setActiveSortIndex}
              setSortType={setSortType}
              setSortingOrder={setSortingOrder}
              sortingOrder={sortingOrder}
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
