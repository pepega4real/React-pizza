import React from 'react'
import Categories from '../components/Categories/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import PizzaLoader from '../components/PizzaBlock/PizzaLoader'
import Pagination from '../components/Pagination'

const Home = ({
  pizzaList,
  isPizzasLoaded,
  searchPizzasValue,
  categoriesList,
  activeCategory,
  setActiveCategory,
  sortList,
  activeSortIndex,
  setActiveSortIndex,
  setSortType,
  setSortingOrder,
  sortingOrder,
  setPageNumber,
}) => {
  const skeletonsLoader = [...Array(4)].map((_, index) => <PizzaLoader key={index} />)
  const filteredPizzas = pizzaList.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchPizzasValue.toLowerCase())
  )

  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            categoriesList={categoriesList}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <Sort
            sortList={sortList}
            activeSortIndex={activeSortIndex}
            setActiveSortIndex={setActiveSortIndex}
            setSortType={setSortType}
            setSortingOrder={setSortingOrder}
            sortingOrder={sortingOrder}
          />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isPizzasLoaded
            ? skeletonsLoader
            : filteredPizzas.map((pizza) => <PizzaBlock key={pizza?.imgUrl} {...pizza} />)}
        </div>
        <Pagination setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Home
