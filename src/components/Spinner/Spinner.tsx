import { FC } from 'react'
import styles from './Spinner.module.scss'
import utilStyles from 'styles/base/Utils.module.scss'
import clsx from 'clsx'

interface SpinnerProps {
  color?: 'currentColor' | 'primary' | 'secondary' | 'gray-100' | 'gray-900'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  animation?: 'normal' | 'following'
  isPageCenter?: boolean
}

export const Spinner: FC<SpinnerProps> = ({
  color = 'currentColor',
  size = 'md',
  animation = 'normal',
  isPageCenter = false,
}) => {
  return (
    <span
      className={clsx(styles.root, styles[animation], {
        [styles.page_center]: isPageCenter,
      })}
      data-color={color}
      data-size={size}
    >
      {animation === 'following' && (
        <svg viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            className={styles.path}
            data-color={color}
          />
        </svg>
      )}
      <span className={utilStyles.sr_only}>Loading...</span>
    </span>
  )
}
