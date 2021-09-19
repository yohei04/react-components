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
}

export const Button: FC<ButtonProps> = ({
  color = 'primary',
  shape = 'curve',
  size = 'md',
  variant = 'solid',
  isFullWidth = false,
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
    />
  )
}
