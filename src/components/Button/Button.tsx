import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  shape?: 'curve' | 'round' | 'square'
  variant?: 'solid' | 'outline'
  isFullWidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  shape = 'curve',
  size = 'md',
  variant = 'solid',
  isFullWidth = false,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.root,
        styles[color],
        styles[shape],
        styles[size],
        styles[variant],
        { [styles.full_width]: isFullWidth }
      )}
      {...rest}
    >
      {startIcon && (
        <span className={clsx(styles.icon, styles.icon__start)}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={clsx(styles.icon, styles.icon__end)}>{endIcon}</span>
      )}
    </button>
  )
}
