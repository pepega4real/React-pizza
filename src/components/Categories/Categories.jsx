import React, { useState } from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
  const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const [activeCategory, setActiveCategory] = useState(0)

  const changeActiveCategory = (index) => {
    setActiveCategory(index)
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
