import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import utilStyles from 'styles/base/Utils.module.scss'
import styles from './Stack.module.scss'

interface StackProps {
  children: ReactNode
  spacing: keyof typeof utilStyles
  direction?: 'column' | 'row'
  classNameProp?: string
}

export const Stack: FC<StackProps> = ({
  children,
  spacing,
  direction = 'column',
  classNameProp,
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        styles[direction],
        utilStyles[spacing],
        classNameProp
      )}
    >
      {children}
    </div>
  )
}
