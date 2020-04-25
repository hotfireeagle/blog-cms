import * as actions from './action'
import { obj2arr } from '../../util/tool'
import { IMenuModuleState } from './interface'
import { IAction } from '../../data.interface'

const reducer = (moduleState: IMenuModuleState, action: IAction) => {
  switch(action.type) {
    case actions.setMenuDisplay:
      return { ...moduleState, showMenu: action.data }
    default:
      return moduleState
  }
}

const obj = {
  actions: obj2arr(actions),
  reducer,
}

export default obj
