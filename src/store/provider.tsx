import React, { useReducer, createContext } from 'react'
import { reducer } from './reducer'
import { storeState } from './state'

interface IProps {
  children: any,
}

const AppProvider: React.FC<IProps> = (props) => {

  const [appStore, dispatch] = useReducer(reducer, storeState)

  const AppContext = createContext({ appStore, dispatch })

  return (
    <AppContext.Provider value={{ appStore, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {
  AppProvider,
}
