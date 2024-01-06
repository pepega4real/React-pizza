import React, { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import AddPlusSvg from '../Assets/img/AddPlusSvg'

import { doughList, sizePizzaList } from '../../constants/pizza'
import { setCartItemsList } from '../../redux/slices/cartSlice'

type PizzaBlockProps = {
  id: number
  title: string
  imgUrl: string
  price: number
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, imgUrl, price }) => {
  const dispath = useAppDispatch()

  const cartItem = useAppSelector(state =>
    state.cart.cartItemsList.find(cartItem => cartItem.id === id)
  )

  const cartItemCount = cartItem ? cartItem.count : 0

  const [activeDouth, setActiveDouth] = useState(0)
  const [activeSizePizza, setActiveSizePizza] = useState(0)

  const addPizzaToCart = () => {
    const cartItem = {
      id,
      title,
      imgUrl,
      price,
      dought: doughList[activeDouth],
      size: sizePizzaList[activeSizePizza],
      count: 0,
    }

    dispath(setCartItemsList(cartItem))
  }

  const changeDough = (index: number) => {
    setActiveDouth(index)
  }

  const changeSizePizza = (index: number) => {
    setActiveSizePizza(index)
  }

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <img className='pizza-block__image' src={imgUrl} alt='Pizza' />
        <h4 className='pizza-block__title'>{title}</h4>
        <div className='pizza-block__selector'>
          <ul>
            {doughList.map((doughtName, index) => (
              <li
                className={activeDouth === index ? 'active' : ''}
                key={index}
                onClick={() => changeDough(index)}>
                {doughtName}
              </li>
            ))}
          </ul>
          <ul>
            {sizePizzaList.map((sizePizza, index) => (
              <li
                key={index}
                onClick={() => changeSizePizza(index)}
                className={activeSizePizza === index ? 'active' : ''}>
                {sizePizza} см
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {price} ₽</div>
          <button onClick={addPizzaToCart} className='button button--outline button--add'>
            <AddPlusSvg />
            <span>Добавить</span>
            {cartItemCount > 0 && <i>{cartItemCount}</i>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(PizzaBlock)
