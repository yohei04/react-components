import { FC, ReactNode, useState } from 'react'
import { PaginationItem } from '.'
import styles from './Pagination.module.scss'

interface PaginationProps {
  children: ReactNode
  count: number
}

export const Pagination: FC<PaginationProps> = ({ count }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const handleCurrentPage = (page: number) => setCurrentPage(page)
  const pages = Array.from({ length: count }, (_, i) => i + 1)

  return (
    <nav aria-label="pagination">
      <ul className={styles.root}>
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
