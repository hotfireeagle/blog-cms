import {
  TEST
} from './action'

interface InitialState {
  count: number
}

const initState: InitialState = {
  count: 1
}

// FIXME: type check fix
const pageIndex = (previousState=initState, action: any) => {
  switch(action.type) {
    case TEST:
      return { ...previousState, count: previousState.count + 1 }
    default:
      return previousState
  }
}

export {
  pageIndex
}
