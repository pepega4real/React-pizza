import React from 'react'
import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'

const Home = ({ pizzaList, isPizzasLoaded }) => {
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {(isPizzasLoaded ? [...Array(4)] : pizzaList).map((pizza) => (
            <PizzaBlock key={pizza?.imgUrl} {...pizza} isPizzasLoaded={isPizzasLoaded} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
