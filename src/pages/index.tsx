import { Button } from '@components/Button'
import { ArrowLeftIcon, PhoneIcon } from '@components/Button/Icon'
import { Spinner } from '@components/Spinner'
import Head from 'next/head'
import React, { useState } from 'react'
import utilStyles from 'styles/base/Utils.module.scss'

export const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading((prev) => !prev)
      handleLoading()
    }, 4000)
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilStyles.p_10}>
          {/* <Spinner size="xl" /> */}
          {/* <Spinner size="3xl" isPageCenter/> */}
          <Spinner size="3xl" animation="following" isPageCenter />
          <Button size="sm" color="primary" type="button">
            ボタン
          </Button>
          <div className={utilStyles.mt_3} />
          <Button
            size="md"
            color="primary"
            variant="outline"
            // endIcon={PhoneIcon}
            isLoading={isLoading}
            disabled={isLoading}
          >
            ボタン
          </Button>
          <div className={utilStyles.mt_3} />
          <div style={{ display: 'flex' }}>
            <Button
              size="lg"
              color="primary"
              shape="round"
              startIcon={ArrowLeftIcon}
              // isLoading={isLoading}
              // disabled={isLoading}
            >
              ボタン
            </Button>
            <span className={utilStyles.mr_3} />
            <Button
              size="lg"
              color="primary"
              // startIcon={ArrowLeftIcon}
              endIcon={PhoneIcon}
              isLoading={isLoading}
              disabled={isLoading}
            >
              ボタン
            </Button>
          </div>
          <div className={utilStyles.mt_3} />
          <Button size="sm" color="secondary" variant="outline" isLoading>
            ボタン
          </Button>
          <span className={utilStyles.mr_3} />
          <Button size="md" color="secondary" variant="outline" disabled>
            ボタン
          </Button>
          <span className={utilStyles.mr_3} />
          <Button size="lg" color="secondary" shape="square" isLoading disabled>
            ボタン
          </Button>
          <div className={utilStyles.mt_3} />
          <Button
            size="lg"
            isFullWidth
            color="secondary"
            shape="square"
            onClick={handleLoading}
          >
            ボタン
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Home
