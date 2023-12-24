import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ setPageNumber }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        BreakLabel='...'
        nextLabel=' >'
        onPageChange={(e) => setPageNumber(e.selected)}
        pageRangeDisplayed={4}
        pageCount={2}
        previousLabel='< '
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
