import Head from 'next/head'
import utilStyles from 'styles/base/Utils.module.scss'

export const Home = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilStyles.p_10}></div>
      </main>
    </div>
  )
}

export default Home
