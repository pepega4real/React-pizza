import styles from './Categories.module.scss'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveCategory } from '../../redux/slices/filterSlice'
import { categoriesList } from '../../constants/filter'

const Categories = () => {
  const dispatch = useDispatch()
  const activeCategory = useSelector((state) => state.filter.activeCategory)

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
