import axios from 'axios'
import './App.css'
import Header from './components/Header'
import './scss/app.scss'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
  const [pizzaList, setPizzaList] = useState([])
  const [isPizzasLoaded, setIsPizzasLoaded] = useState(true)

  const fetchData = async () => {
    const response = await axios.get('https://658456004d1ee97c6bcf867b.mockapi.io/pizzas')
    setPizzaList(response.data)
    setIsPizzasLoaded(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
