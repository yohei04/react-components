import React, { FC } from 'react'
import { PaginationFirst, PaginationItem, PaginationPrev } from '.'
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
        {pages.map((page) => (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        ))}
      </ul>
    </nav>
  )
}
