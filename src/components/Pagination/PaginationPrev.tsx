import { ComponentPropsWithoutRef, FC } from 'react'
import Link from 'next/link'
import styles from './Pagination.module.scss'

type PaginationPrevProps = ComponentPropsWithoutRef<'a'>

export const PaginationPrev: FC<PaginationPrevProps> = (props) => {
  return (
    <li>
      <Link href={`/`}>
        {/* <Link href={`/page=${page}`}> */}
        <a className={styles.link} {...props}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.arrow}
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
