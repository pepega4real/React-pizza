import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import greyArrowLeftImg from '../../assets/img/grey-arrow-left.svg'
import trashImg from '../../assets/img/trash.svg'

import CartItem from '../../components/CartItem'
import EmptyCart from '../../components/EmptyCart'
import { deleteCart } from '../../redux/slices/cartSlice'

const Cart = () => {
  const dispath = useAppDispatch()

  const totalCartItems = useAppSelector(state => state.cart.totalCartItems)
  const totalCartPrice = useAppSelector(state => state.cart.totalCartPrice)
  const cartItemsList = useAppSelector(state => state.cart.cartItemsList)

  const onClickDeleteCart = () => {
    if (window.confirm('Удалить все товары из корзины?')) {
      dispath(deleteCart())
    }
  }

  if (!totalCartPrice) {
    return <EmptyCart />
  }

  return (
    <div className='wrapper'>
      <div className='content'>
        <div className='container container--cart'>
          <div className='cart'>
            <div className='cart__top'>
              <h2 className='content__title'>Корзина</h2>
              <div onClick={onClickDeleteCart} className='cart__clear'>
                <img src={trashImg} alt='trash' />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className='content__items'>
              {cartItemsList.map(cartItem => (
                <CartItem key={cartItem.id} {...cartItem} />
              ))}
            </div>
            <div className='cart__bottom'>
              <div className='cart__bottom-details'>
                <span>
                  Всего пицц: <b>{totalCartItems} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalCartPrice} ₽</b>
                </span>
              </div>
              <div className='cart__bottom-buttons'>
                <Link to='/'>
                  <button className='button button--outline button--add go-back-btn'>
                    <img src={greyArrowLeftImg} alt='arrow' />
                    <span>Вернуться назад</span>
                  </button>
                </Link>

                <div className='button pay-btn'>
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Cart)
