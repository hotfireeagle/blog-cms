import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { storeState, IContext } from './state'
import { AppContext } from './context'

interface IProps {
  children: any,
}

const AppProvider: React.FC<IProps> = (props) => {

  const [appStore, dispatch] = useReducer(reducer, storeState)

  const appState: IContext = { appStore, dispatch }

  return (
    <AppContext.Provider value={appState}>
      {props.children}
    </AppContext.Provider>
  )
}

export {
  AppProvider,
}
