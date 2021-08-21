import { FC, ReactNode } from 'react'
import styles from './Tabs.module.scss'

interface TabListProps {
  children: ReactNode[]
  orientation?: 'horizontal' | 'vertical'
}

export const TabList: FC<TabListProps> = ({
  children,
  orientation = 'horizontal',
}) => {
  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={styles.tablist}
    >
      {children}
    </div>
  )
}
