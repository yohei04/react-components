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
      <Link href={`/`} passHref>
        {/* <Link href={`/page=${page}`} passHref> */}
        <a
          className={styles.link}
          href="replace"
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => handleCurrentPage(page)}
        >
          {page}
        </a>
      </Link>
    </li>
  )
}
