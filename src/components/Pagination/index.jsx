import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { useDispatch } from 'react-redux'
import { setPageNumber } from '../../redux/slices/filterSlice'

const Pagination = () => {
  const dispath = useDispatch()

  return (
    <>
      <ReactPaginate
        className={styles.root}
        BreakLabel='...'
        nextLabel=' >'
        onPageChange={(e) => dispath(setPageNumber(e.selected))}
        pageRangeDisplayed={4}
        pageCount={2}
        previousLabel='< '
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
