import { FC } from 'react'
import Link from 'next/link'
import styles from './Pagination.module.scss'

interface PaginationFirstProps {
  currentPage: number
  handleCurrentPage: (page: number) => void
}

export const PaginationFirst: FC<PaginationFirstProps> = ({
  currentPage,
  handleCurrentPage,
}) => {
  return (
    <li>
      {/* <Link href={`/page=1`} passHref> */}
      <Link href={`/`} passHref>
        <a
          className={styles.link}
          href="replace"
          aria-disabled={currentPage === 1}
          aria-label="First Page"
          tabIndex={currentPage === 1 ? -1 : undefined}
          onClick={() => handleCurrentPage(1)}
        >
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </a>
      </Link>
    </li>
  )
}
