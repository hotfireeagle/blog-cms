import React from 'react'
import { AppContext } from '../../store/context'
import { ADD } from './action'

interface IProps {
  count: number,
  testActionCreator: () => {},
}

const IndexPageComponent: React.FC<any> = props => {
  const context = React.useContext(AppContext)
  const contextStore = {
    ...context.appStore.pageIndex
  }
  console.log('context is', context)
  console.log('contextStore is', contextStore)

  const add = () => context.dispatch({ type: ADD })

  return <h1 onClick={add}>{contextStore.count}</h1>
}

const IndexPage = IndexPageComponent

export {
  IndexPage,
}
