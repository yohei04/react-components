import { FC } from 'react'
import Link from 'next/link'
import styles from './Pagination.module.scss'

interface PaginationPrevProps {
  currentPage: number
  handleCurrentPage: (page: number) => void
}

export const PaginationPrev: FC<PaginationPrevProps> = ({
  currentPage,
  handleCurrentPage,
}) => {
  return (
    <li>
      {/* <Link href={`/page=${currentPage - 1}`} passHref> */}
      <Link href={`/`} passHref>
        <a
          className={styles.link}
          href="replace"
          aria-disabled={currentPage === 1}
          aria-label="Previous Page"
          tabIndex={currentPage === 1 ? -1 : undefined}
          onClick={() => handleCurrentPage(currentPage - 1)}
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
      </Link>
    </li>
  )
}
