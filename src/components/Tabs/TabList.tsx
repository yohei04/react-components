import { FC, ReactNode } from 'react'

interface TabListProps {
  children: ReactNode
}

export const TabList: FC<TabListProps> = ({ children }) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
    >
      {children}
    </div>
  )
}
