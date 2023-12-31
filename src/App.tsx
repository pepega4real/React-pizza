import { Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks'

import './App.css'
import './scss/app.scss'

import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Header from './components/Header'
import { fetchPizza } from './redux/slices/pizzaSlice'

function App() {
  // const navigate = useNavigate()
  const dispath = useAppDispatch()

  // const isSearch = useRef(false)
  // const isMounted = useRef(false)

  const sortType = useAppSelector(state => state.filter.sortType)
  const activeCategory = useAppSelector(state => state.filter.activeCategory)
  const sortingOrder = useAppSelector(state => state.filter.sortingOrder)
  const pageNumber = useAppSelector(state => state.filter.pageNumber)

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params: {
  //       page?: string
  //       sortBy?: string
  //       order?: string
  //       type?: string
  //     } = qs.parse(window.location.search.substring(1))

  //     dispath(
  //       setFilters({
  //         page: Number(params.page) || 0,
  //         sortBy: params.sortBy || '',
  //         order: params.order || '',
  //         type: Number(params.type) || 0,
  //       })
  //     )

  //     isSearch.current = true
  //   }
  // }, [])

  dispath(fetchPizza({ pageNumber, sortType, sortingOrder, activeCategory }))

  // useEffect(() => {
  //   if (!isSearch.current) {
  //     dispath(fetchPizza({ pageNumber, sortType, sortingOrder, activeCategory }))
  //   }

  //   isSearch.current = false
  // }, [dispath])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       page: pageNumber,
  //       sortBy: sortType.sortParam,
  //       order: sortingOrder,
  //       type: activeCategory,
  //     })

  //     navigate(`?${queryString}`)
  //   }

  //   isMounted.current = true
  // }, [activeCategory, sortType.sortParam, sortingOrder, pageNumber, navigate])

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
