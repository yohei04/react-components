import { FC, ReactNode } from 'react'
import styles from './Tabs.module.scss'
import { useTabs } from './TabsProvider'

interface TabProps {
  children: ReactNode
  index: number
}

export const Tab: FC<TabProps> = ({ children, index }) => {
  const { activeIndex, setActive } = useTabs()
  const isSelected = activeIndex === index

  return (
    <button
      type="button"
      id={`tab-${index}`}
      role="tab"
      tabIndex={0}
      aria-selected={isSelected}
      aria-controls={`tabpanel-${index}`}
      className={styles.tab}
      data-index="0"
      onClick={() => setActive(index)}
    >
      {children}
    </button>
  )
}
