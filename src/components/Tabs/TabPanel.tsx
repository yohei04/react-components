import { FC, ReactNode } from 'react'

interface TabPanelProps {
  children: ReactNode
  index: number
}

export const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
  return (
    <div
      tabIndex={0}
      aria-labelledby={`tab-${index}`}
      role="tabpanel"
      id={`tabpanel-${index}`}
      className="chakra-tabs__tab-panel css-a5mhaz"
      hidden={false}
    >
      {children}
    </div>
  )
}
