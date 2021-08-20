import { FC, ReactNode } from 'react'

interface TabProps {
  children: ReactNode
  index: number
}

export const Tab: FC<TabProps> = ({ children, index }) => {
  return (
    <button
      type="button"
      id={`tab-${index}`}
      role="tab"
      tabIndex={0}
      aria-selected="true"
      aria-controls={`tabpanel-${index}`}
      className="chakra-tabs__tab css-1ltezim"
      data-index="0"
    >
      {children}
    </button>
  )
}
