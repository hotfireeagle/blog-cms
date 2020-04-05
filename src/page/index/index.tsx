import React from 'react'
import { AppContext } from '../../store/context'

interface IProps {
  count: number,
  testActionCreator: () => {},
}

const IndexPageComponent: React.FC<any> = props => {
  const context = React.useContext(AppContext)

  const add = () => context.dispatch({ type: 'ADD' })

  return <h1 onClick={add}>{context.appStore.count}</h1>
}

const IndexPage = IndexPageComponent

export {
  IndexPage,
}
