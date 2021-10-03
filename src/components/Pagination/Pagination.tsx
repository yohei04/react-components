import React, { FC } from 'react'
import {
  PaginationDots,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
} from '.'
import styles from './Pagination.module.scss'

interface PaginationProps {
  totalPageCount: number
  currentPage: number
  handleCurrentPage: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  totalPageCount,
  currentPage,
  handleCurrentPage,
}) => {
  const pages = Array.from({ length: totalPageCount }, (_, i) => i + 1)

  const siblingCount = 2

  const pager = pages.slice(1, totalPageCount - 1).map((page) => {
    if (currentPage <= siblingCount + 3) {
      if (page === totalPageCount - 2) {
        return <PaginationDots />
      } else if (currentPage + siblingCount >= page) {
        return (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        )
      }
    } else if (
      currentPage >= siblingCount + 4 &&
      currentPage <= totalPageCount - siblingCount - 3
    ) {
      if (page === 2 || page === totalPageCount - 2) {
        return <PaginationDots />
      } else if (
        currentPage - siblingCount <= page &&
        currentPage + siblingCount >= page
      ) {
        return (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        )
      }
    } else if (currentPage >= totalPageCount - siblingCount - 2) {
      if (page === 2) {
        return <PaginationDots />
      } else if (currentPage - siblingCount <= page) {
        return (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        )
      }
    }
  })

  return (
    <nav aria-label="pagination">
      <ul className={styles.root}>
        <PaginationFirst
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationPrev
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationItem
          key={1}
          page={1}
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        {pager}
        <PaginationItem
          key={totalPageCount}
          page={totalPageCount}
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationNext
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationLast
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          handleCurrentPage={handleCurrentPage}
        />
      </ul>
    </nav>
  )
}
