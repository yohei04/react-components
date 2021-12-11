import React, { FC } from 'react'
import {
  PaginationDots,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
} from '.'
import styles from './Pagination.module.scss'

interface PaginationProps {
  totalPageCount: number
  currentPage: number
  handleCurrentPage: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  totalPageCount,
  currentPage,
  handleCurrentPage,
}) => {
  const pages = Array.from({ length: totalPageCount }, (_, i) => i + 1)

  /** 現在のページから左右何ページ表示するかの数 */
  const siblingCount = 2
  // siblingCount + firstPage + lastPage + currentPage + 2*DOTS。 (firstPage + lastPageは別コンポーネントのため含まない)
  const totalPageNumbers = siblingCount + 3

  const pager = pages.slice(1, totalPageCount - 1).map((page) => {
    // ドットがない場合
    if (totalPageNumbers >= totalPageCount) {
      return (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      )
      // 右側にのみドットがある場合
    } else if (currentPage <= siblingCount + 3) {
      // 最後から2番目にドットを表示
      if (page === totalPageCount - 2) {
        return <PaginationDots key={page} />
        // 現在のページ+siblingCountを表示
      } else if (currentPage + siblingCount >= page) {
        return (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        )
      }
      // 左右にドットがある場合
    } else if (
      currentPage >= siblingCount + 4 &&
      currentPage <= totalPageCount - siblingCount - 3
    ) {
      // 最初から2番目と最後から2番目にドットを表示
      if (page === 2 || page === totalPageCount - 2) {
        return <PaginationDots key={page} />
        // 現在のページから前後siblingCountを表示
      } else if (
        currentPage - siblingCount <= page &&
        currentPage + siblingCount >= page
      ) {
        return (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        )
      }
      // 左側にのみドットがある場合
    } else if (currentPage >= totalPageCount - siblingCount - 2) {
      // 最初から2番目にドットを表示
      if (page === 2) {
        return <PaginationDots key={page} />
        // 現在のページ-siblingCountを表示
      } else if (currentPage - siblingCount <= page) {
        return (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
        )
      }
    }
  })

  return (
    <nav aria-label="pagination">
      <ul className={styles.root}>
        <PaginationFirst
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationPrev
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationItem
          key={1}
          page={1}
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        {pager}
        <PaginationItem
          key={totalPageCount}
          page={totalPageCount}
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationNext
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          handleCurrentPage={handleCurrentPage}
        />
        <PaginationLast
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          handleCurrentPage={handleCurrentPage}
        />
      </ul>
    </nav>
  )
}
