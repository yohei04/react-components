import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Tabs.module.scss'
import { TabsProvider } from './TabsProvider'

interface TabsProps {
  children: ReactNode[]
  orientation?: 'horizontal' | 'vertical'
  isFitted?: boolean
}

export const Tabs: FC<TabsProps> = ({
  children,
  orientation = 'horizontal',
  isFitted = false,
}) => {
  return (
    <TabsProvider>
      <div
        className={clsx(styles[orientation], {
          [styles.isFitted]: isFitted,
        })}
      >
        {children}
      </div>
    </TabsProvider>
  )
}
