import React from 'react'
import { useSelector } from 'react-redux'

import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import PizzaLoader from '../components/PizzaBlock/PizzaLoader'
import Pagination from '../components/Pagination'

const Home = () => {
  const searchPizzasValue = useSelector((state) => state.filter.searchPizzasValue)
  const pizzaList = useSelector((state) => state.pizza.pizzaList)
  const isPizzasLoaded = useSelector((state) => state.pizza.isPizzasLoaded)

  const skeletonsLoader = [...Array(4)].map((_, index) => <PizzaLoader key={index} />)

  const filteredPizzas = pizzaList.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchPizzasValue.toLowerCase())
  )

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isPizzasLoaded
            ? skeletonsLoader
            : filteredPizzas.map((pizza) => <PizzaBlock key={pizza?.imgUrl} {...pizza} />)}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default Home
