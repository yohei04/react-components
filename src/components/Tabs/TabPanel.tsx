import { FC, ReactNode } from 'react'
import { useTabs } from './TabsProvider'

interface TabPanelProps {
  children: ReactNode
  index: number
}

export const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
  const { activeIndex } = useTabs()
  const isSelected = activeIndex === index

  return (
    <div
      tabIndex={0}
      aria-labelledby={`tab-${index}`}
      role="tabpanel"
      id={`tabpanel-${index}`}
      hidden={!isSelected}
    >
      {children}
    </div>
  )
}
