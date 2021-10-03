import { FC } from 'react'
import Link from 'next/link'
import styles from './Pagination.module.scss'

interface PaginationLastProps {
  currentPage: number
  totalPageCount: number
  handleCurrentPage: (page: number) => void
}

export const PaginationLast: FC<PaginationLastProps> = ({
  currentPage,
  totalPageCount,
  handleCurrentPage,
}) => {
  return (
    <li>
      {/* <Link href={`/page=1`} passHref> */}
      <Link href={`/`} passHref>
        <a
          className={styles.link}
          href="replace"
          aria-disabled={currentPage === totalPageCount}
          aria-label="Last Page"
          tabIndex={currentPage === totalPageCount ? -1 : undefined}
          onClick={() => handleCurrentPage(totalPageCount)}
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
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </a>
      </Link>
    </li>
  )
}
