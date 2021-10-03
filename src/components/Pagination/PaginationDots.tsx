import { FC } from 'react'
import styles from './Pagination.module.scss'

export const PaginationDots: FC = () => {
  return (
    <li>
      <span className={styles.dots}>...</span>
    </li>
  )
}
