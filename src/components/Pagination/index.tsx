import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setPageNumber } from '../../redux/slices/filterSlice'

const Pagination = () => {
  const dispath = useAppDispatch()

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel='...'
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
