import React from 'react'
import { IContext } from './state'

const initUselessContext: IContext = {
  appStore: {
    pageIndex: {
      count: 1,
    }
  },
  dispatch: () => {},
}

const AppContext = React.createContext(initUselessContext) // shit design for default value

export {
  AppContext,
}
