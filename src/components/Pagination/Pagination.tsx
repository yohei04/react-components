import { FC } from 'react'
import styles from './Pagination.module.scss'

interface PaginationProps {}

export const Pagination: FC<PaginationProps> = () => {
  return (
    <nav aria-label="pagination">
      <ul className={styles.root}>
        <li className="pagination__item pagination__item--previous-group">
          <a className="pagination__link" href="#">
            <span className="visuallyhidden">
              Previous
              <span>set of pages</span>
            </span>
          </a>
        </li>
        <li className="pagination__item pagination__item--previous-page">
          <a className="pagination__link" href="#">
            <span className="visuallyhidden">
              Previous
              <span>page</span>
            </span>
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            <span className="visuallyhidden">page </span>1
          </a>
        </li>
        <li className="pagination__item pagination__item--next-page">
          <a className="pagination__link" href="#">
            <span className="visuallyhidden">
              Next
              <span>page</span>
            </span>
          </a>
        </li>
        <li className="pagination__item pagination__item--next-group">
          <a className="pagination__link" href="#">
            <span className="visuallyhidden">
              Next
              <span>set of pages</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
