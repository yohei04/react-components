import { Pagination } from '@components/Pagination'
import { useState } from 'react'
import utilStyles from 'styles/base/Utils.module.scss'

export const Home = (): JSX.Element => {
  const posts = [...Array(21)].map((e, i) => {
    return { id: i + 1, title: `post-${i + 1}`, content: `content-${i + 1}` }
  })

  /** トータルのデータ数 */
  const totalCount = posts.length
  /** 1ページに表示する数 */
  const pageSize = 5
  /** トータルのページ数 */
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const [currentPage, setCurrentPage] = useState(1)
  const handleCurrentPage = (page: number) => setCurrentPage(page)

  return (
    <div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap' }}
        className={utilStyles.p_10}
      >
        {posts
          .slice(
            (currentPage - 1) * pageSize,
            (currentPage - 1) * pageSize + pageSize
          )
          .map(({ id, title }) => (
            <div
              key={id}
              style={{ display: 'flex' }}
              className={utilStyles.p_1}
            >
              <h3>{title}</h3>
            </div>
          ))}
      </div>
      <Pagination
        totalPageCount={totalPageCount}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  )
}

export default Home
