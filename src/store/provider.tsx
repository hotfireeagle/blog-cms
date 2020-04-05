import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { defaultStoreState, IContext } from './state'
import { AppContext } from './context'

interface IProps {
  children: any,
}

export const AppProvider: React.FC<IProps> = (props) => {

  const [appStore, dispatch] = useReducer(reducer, defaultStoreState)

  const appState: IContext = { appStore, dispatch }

  return (
    <AppContext.Provider value={appState}>
      {props.children}
    </AppContext.Provider>
  )
}
