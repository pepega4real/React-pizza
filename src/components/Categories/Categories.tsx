import styles from './Categories.module.scss'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import { setActiveCategory } from '../../redux/slices/filterSlice'
import { categoriesList } from '../../constants/filter'

const Categories: React.FC = () => {
  const dispatch = useAppDispatch()
  const activeCategory = useAppSelector((state) => state.filter.activeCategory)

  const changeActiveCategory = (index: number) => {
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
