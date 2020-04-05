import * as actionObj from './action'
import { obj2arr } from '../../util/tool'
import { IndexPageStore } from './interface'

const reducer = (prevState: IndexPageStore, action: any) => {
  switch (action.type) {
    case actionObj.ADD:
      return { ...prevState, count: prevState.count + 1 }
    default:
      return prevState
  }
}

export const pageIndex = {
  reducer,
  actions: obj2arr(actionObj),
}
