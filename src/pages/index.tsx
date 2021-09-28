import { Pagination } from '@components/Pagination'
import { Spacer } from '@components/Spacer'
import utilStyles from 'styles/base/Utils.module.scss'

export const Home = (): JSX.Element => {
  /** トータルの data の数 */
  const totalCount = 21
  /** 1ページに表示する数 */
  const pageSize = 5
  /** トータルのページ数 */
  const totalPageCount = Math.ceil(totalCount / pageSize)
  const posts = [...Array(totalCount)].map((e, i) => {
    return { id: i + 1, title: `post-${i + 1}`, content: `content-${i + 1}` }
  })

  return (
    <div>
      <div
        style={{ display: 'flex', flexWrap: 'wrap' }}
        className={utilStyles.p_10}
      >
        {posts.map(({ id, title, content }) => (
          <div key={id} style={{ display: 'flex' }} className={utilStyles.p_1}>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
      {/* <Spacer mt={3} /> */}
      <Pagination totalPageCount={totalPageCount} />
    </div>
  )
}

export default Home
