import { FC, ReactNode, useState } from 'react'
import styles from './Tabs.module.scss'

interface TabsProps {
  children: ReactNode
}

export const Tabs: FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  console.log({children})

  return <div className={styles.root}>{children}</div>
}
