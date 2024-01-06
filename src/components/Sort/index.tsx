import { memo, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import SortArrowSvg from '../Assets/img/SortArrowSvg/SortArrowSvg'

import { sortList } from '../../constants/filter'
import { setActiveSortIndex, setSortType } from '../../redux/slices/filterSlice'

const Sort = () => {
  const dispatch = useAppDispatch()

  const activeSortIndex = useAppSelector(state => state.filter.activeSortIndex)

  const [toggleSort, setToggleSort] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  const toggleSortPopup = () => {
    setToggleSort(prev => !prev)
  }

  const changeActiveIndex = (index: number, sortParam: string) => {
    dispatch(setActiveSortIndex(index))
    setToggleSort(false)
    dispatch(setSortType(sortParam))
  }

  useEffect(() => {
    const handleClickSort = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setToggleSort(false)
      }
    }

    document.body.addEventListener('click', handleClickSort)

    return () => {
      document.body.removeEventListener('click', handleClickSort)
    }
  }, [])

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <SortArrowSvg />
        <b>Сортировка по:</b>
        <span onClick={toggleSortPopup}>{sortList[activeSortIndex].name}</span>
      </div>
      {toggleSort && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((sortObj, i) => (
              <li
                className={activeSortIndex === i ? 'active' : ''}
                onClick={() => changeActiveIndex(i, sortObj.sortParam)}
                key={sortObj.name}>
                {sortObj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(Sort)
