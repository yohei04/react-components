import { FC, ReactNode } from 'react'
import styles from './Tabs.module.scss'
import { TabsProvider } from './TabsProvider'

interface TabsProps {
  children: ReactNode[]
}

export const Tabs: FC<TabsProps> = ({ children }) => {
  return (
    <TabsProvider>
      <div className={styles.root}>{children}</div>
    </TabsProvider>
  )
}
