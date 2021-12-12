<!-- REF -->
<!-- REF: https://mui.com/components/pagination/#main-content -->
<!-- REF: https://react-bootstrap.github.io/components/pagination/ -->
<!-- REF: https://web.dev/blog/7/ -->
<!-- REF: https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination -->
<!-- REF: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/ -->

```javascript
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
```
