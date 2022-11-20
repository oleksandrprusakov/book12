import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext()

const AppWraper = ({ children }) => {
  const [appState, setAppState] = useState()

  const contextValue = useMemo(() => {
    return [appState, setAppState]
  }, [appState, setAppState])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}

export default AppWraper
