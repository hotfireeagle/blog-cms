import React from 'react'
import { AppContext } from '../../store/context'
import { ADD } from './action'

export const IndexPage: React.FC<any> = props => {
  const context = React.useContext(AppContext)
  
  const contextStore = { ...context.appStore.pageIndex }

  const add = () => context.dispatch({ type: ADD })

  return <h1 onClick={add}>{contextStore.count}</h1>
}
