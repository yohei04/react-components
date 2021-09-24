import { FC, memo } from 'react'
import styles from './RequiredIndicator.module.scss'

export const RequiredIndicator: FC = memo(() => {
  return (
    <span role="presentation" aria-hidden="true" className={styles.root}>
      *
    </span>
  )
})
