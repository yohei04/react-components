import { FC } from 'react'
import styles from './Spinner.module.scss'

interface SpinnerProps {
  size: 'sm' | 'md' | 'lg'
  color: 'blue' | 'black' | 'white'
}

export const Spinner: FC<SpinnerProps> = ({ color = 'blue', size = 'md' }) => {
  return (
    <svg viewBox="0 0 50 50" className={styles.root} data-size={size}>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        className={styles.path}
        data-color={color}
      ></circle>
    </svg>
  )
}
