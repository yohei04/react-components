import { Pagination } from '@components/Pagination'
import { usePagination } from '@components/Pagination/usePagination'
import utilStyles from 'styles/base/Utils.module.scss'

export const Home = (): JSX.Element => {
  const posts = [...Array(51)].map((e, i) => {
    return { id: i + 1, title: `post-${i + 1}`, content: `content-${i + 1}` }
  })

  const { totalPageCount, pageSize, currentPage, handleCurrentPage } =
    usePagination(posts)

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
