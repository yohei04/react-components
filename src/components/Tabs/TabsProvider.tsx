import { useContext, ReactNode, FC, useState, createContext } from 'react'

export type TabsContextType = {
  activeIndex: number
  setActive: (index: number) => void
}

const tabsContextDefaultValues: TabsContextType = {
  activeIndex: 0,
  setActive: (_index: number) => undefined,
}

export const TabsContext = createContext<TabsContextType>(
  tabsContextDefaultValues
)

export const useTabs = () => useContext(TabsContext)

interface TabsProviderProps {
  children: ReactNode
}

export const TabsProvider: FC<TabsProviderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(
    tabsContextDefaultValues.activeIndex
  )

  const setActive = (index: number) => setActiveIndex(index)

  return (
    <TabsContext.Provider value={{ activeIndex, setActive }}>
      {children}
    </TabsContext.Provider>
  )
}
