import React from 'react'
import { connect } from 'react-redux'
import { testActionCreator } from './action'
import { IAppState } from '../../redux/interface'

interface IProps {
  count: number,
  testActionCreator: () => {},
}

const IndexPageComponent: React.FC<IProps> = props => {
  return <h1 onClick={props.testActionCreator}>{props.count}</h1>
}

// FIXME: 这个类型需要修复一下
const mapStateToProps = (storeState: IAppState, ownProps: any) => ({
  count: storeState.pageIndex.count,
})

const mapDispatchToProps = { testActionCreator }

const IndexPage = connect(mapStateToProps, mapDispatchToProps)(IndexPageComponent)

export {
  IndexPage
}
