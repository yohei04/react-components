import { FC } from 'react'
import Link from 'next/link'
import styles from './Pagination.module.scss'

interface PaginationItemProps {
  page: number
  currentPage: number
  handleCurrentPage: (page: number) => void
}

export const PaginationItem: FC<PaginationItemProps> = ({
  page,
  currentPage,
  handleCurrentPage,
}) => {
  return (
    <li>
      <Link href={`/`}>
        {/* <Link href={`/page=${page}`}> */}
        <button
          aria-label={`page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => handleCurrentPage(page)}
          className={styles.link}
        >
          {page}
        </button>
      </Link>
    </li>
  )
}
