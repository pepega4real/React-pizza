import React from 'react'
import styles from './Categories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../../redux/slices/filterSlice'

const Categories = () => {
  const dispatch = useDispatch()
  const { categoriesList, activeCategory } = useSelector((state) => state.filter)

  const changeActiveCategory = (index) => {
    dispatch(setActiveCategory(index))
  }

  return (
    <div className={styles.categories}>
      <ul>
        {categoriesList.map((category, index) => (
          <li
            className={activeCategory === index ? styles.active : ''}
            onClick={() => changeActiveCategory(index)}
            key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
