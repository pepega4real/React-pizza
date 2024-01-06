import { memo } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { deleteAllSamePizza, deleteCartItem, setCartItemsList } from '../../redux/slices/cartSlice'
import ClearCartCatSvg from '../Assets/img/ClearCartCatSvg'
import PlusMinusCartSvg from '../Assets/img/PlusMinusCartSvg'

type CartItemProps = {
  id: number
  title: string
  imgUrl: string
  price: number
  dought: string
  size: number
  count: number
}

const CartItem = ({ id, title, imgUrl, price, dought, size, count }: CartItemProps) => {
  const dispath = useAppDispatch()

  const cartCountPlus = () => {
    dispath(setCartItemsList({ id, title, imgUrl, price, dought, size, count }))
  }

  const cartCountMinus = () => {
    dispath(deleteCartItem(id))
  }

  const deleteItem = () => {
    dispath(deleteAllSamePizza(id))
  }

  return (
    <>
      <div className='cart__item'>
        <div className='cart__item-img'>
          <img className='pizza-block__image' src={imgUrl} alt='Pizza' />
        </div>
        <div className='cart__item-info'>
          <h3>{title}</h3>
          <p>
            {dought}, {size} см.
          </p>
        </div>
        <div className='cart__item-count'>
          <div
            onClick={cartCountMinus}
            className='button button--outline button--circle cart__item-count-minus'>
            <PlusMinusCartSvg />
          </div>
          <b>{count}</b>
          <div
            onClick={cartCountPlus}
            className='button button--outline button--circle cart__item-count-plus'>
            <PlusMinusCartSvg />
          </div>
        </div>
        <div className='cart__item-price'>
          <b>{price} ₽</b>
        </div>
        <div onClick={deleteItem} className='cart__item-remove'>
          <div className='button button--outline button--circle'>
            <ClearCartCatSvg />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(CartItem)
