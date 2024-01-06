import { memo, useMemo } from 'react'
import { useAppSelector } from '../hooks/reduxHooks'

import Categories from '../components/Categories/Categories'
import Pagination from '../components/Pagination'
import PizzaBlock from '../components/PizzaBlock'
import PizzaLoader from '../components/PizzaBlock/PizzaLoader'
import Sort from '../components/Sort'

const Home = () => {
  const searchPizzasValue = useAppSelector(state => state.filter.searchPizzasValue)
  const pizzaList = useAppSelector(state => state.pizza.pizzaList)
  const isPizzaLoaded = useAppSelector(state => state.pizza.isPizzaLoaded)

  const skeletonsLoader = [...Array(4)].map((_, index) => <PizzaLoader key={index} />)

  const filteredPizzas = useMemo(
    () =>
      pizzaList.filter(pizza =>
        pizza.title.toLowerCase().includes(searchPizzasValue.toLowerCase())
      ),
    [searchPizzasValue, pizzaList]
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
          {isPizzaLoaded
            ? skeletonsLoader
            : filteredPizzas.map(pizza => <PizzaBlock key={pizza?.imgUrl} {...pizza} />)}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default memo(Home)
