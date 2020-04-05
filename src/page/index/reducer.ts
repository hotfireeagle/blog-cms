import * as actionObj from './action'
import { obj2arr } from '../../util/tool'

export interface IState {
  count: number
}

const initialState: IState = {
  count: 1,
}

// FIXME: type约束
const reducer = (prevState: IState = initialState, action: any) => {
  switch(action.type) {
    case actionObj.ADD:
      return { ...prevState, count: prevState.count + 1 }
    default:
      return prevState
  }
}

const pageIndex = {
  reducer,
  actions: obj2arr(actionObj),
}

export {
  pageIndex,
}
