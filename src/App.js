import './App.css'
import Categories from './components/Categories/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock'
import Sort from './components/Sort'
import './scss/app.scss'

function App() {
  const pizzaList = [
    {
      title: 'Мортаделла с песто',
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/11ee8a3878dd949ebe0175e3fc3b1e9b_292x292.webp',
      price: 629,
    },
    {
      title: 'Сырная',
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_292x292.webp',
      price: 339,
    },
    {
      title: 'Пепперони фреш',
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_292x292.webp',
      price: 339,
    },
    {
      title: 'Двойной цыпленок',
      imgUrl:
        'https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_292x292.webp',
      price: 459,
    },
  ]

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {pizzaList.map((pizza) => (
              <PizzaBlock {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
