import { FC, useState } from 'react'
import { PaginationItem, PaginationPrev } from '.'
import styles from './Pagination.module.scss'

interface PaginationProps {
  totalPageCount: number
}

export const Pagination: FC<PaginationProps> = ({ totalPageCount }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const handleCurrentPage = (page: number) => setCurrentPage(page)
  const pages = Array.from({ length: totalPageCount }, (_, i) => i + 1)

  return (
    <nav aria-label="pagination">
      <ul className={styles.root}>
        <PaginationPrev
          aria-disabled={currentPage === 1}
          aria-label="Previous Page"
          tabIndex={currentPage === 1 ? -1 : undefined}
          onClick={() => handleCurrentPage(currentPage - 1)}
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
