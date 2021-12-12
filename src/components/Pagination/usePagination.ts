import { useCallback, useState } from 'react'

export const usePagination = <T>(data: T[]) => {
  /** トータルのデータ数 */
  const totalCount = data.length
  /** 1ページに表示する数 */
  const pageSize = 5
  /** トータルのページ数 */
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const [currentPage, setCurrentPage] = useState(1)
  const handleCurrentPage = useCallback(
    (page: number) => setCurrentPage(page),
    []
  )

  return {
    totalCount,
    pageSize,
    totalPageCount,
    currentPage,
    handleCurrentPage,
  }
}
