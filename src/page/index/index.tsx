import React from 'react'
import { connect } from 'react-redux'
import { testActionCreator } from './action'

interface IProps {
  count: number,
  testActionCreator: () => {},
}

const IndexPageComponent: React.FC<IProps> = props => {
  return <h1 onClick={props.testActionCreator}>{props.count}</h1>
}

// FIXME: typecheck fix
const mapStateToProps = (storeState: any, ownProps: any) => ({
  count: storeState.pageIndex.count
})

const mapDispatchToProps = { testActionCreator }

const IndexPage = connect(mapStateToProps, mapDispatchToProps)(IndexPageComponent)

export {
  IndexPage
}
