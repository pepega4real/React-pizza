import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'

import styles from './Header.module.scss'

import cartImg from '../../assets/img/cart.svg'
import pizzaLogo from '../../assets/img/pizza-logo.svg'

import PizzasSearch from '../PizzasSearch'

const Header = () => {
  const totalCartItems = useAppSelector(state => state.cart.totalCartItems)
  const totalCartPrice = useAppSelector(state => state.cart.totalCartPrice)

  const location = useLocation()

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Link to='/'>
            <img width='38' src={pizzaLogo} alt='Pizza logo' />
          </Link>
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        {location.pathname !== '/cart' && (
          <>
            <PizzasSearch />
            <div className='header__cart'>
              <Link to='/cart'>
                <button className='button button--cart'>
                  <span>{totalCartPrice} ₽</span>
                  <div className='button__delimiter'></div>
                  <img className={styles.cartImg} src={cartImg} alt='cart' />
                  <span>{totalCartItems}</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default memo(Header)
