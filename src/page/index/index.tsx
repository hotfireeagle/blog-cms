import React from 'react'
// import { connect } from 'react-redux'
import { testActionCreator } from './action'
import { IAppState } from '../../redux/interface'

interface IProps {
  count: number,
  testActionCreator: () => {},
}

const IndexPageComponent: React.FC<any> = props => {
  return <h1 onClick={props.testActionCreator}>{props.count}</h1>
}

// const mapStateToProps = (storeState: IAppState) => ({
//   count: storeState.pageIndex.count,
// })

// const mapDispatchToProps = { testActionCreator }

const IndexPage = IndexPageComponent

export {
  IndexPage,
}
