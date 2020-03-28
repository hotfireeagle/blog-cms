import {
  TEST
} from './action'

export type IPageIndexState = {
  count: number,
}

interface IAction {
  type: string,
  [key: string]: any,
}

const initState: IPageIndexState = {
  count: 1
}

const pageIndex = (previousState=initState, action: IAction) => {
  switch(action.type) {
    case TEST:
      console.log(action.value)
      return { ...previousState, count: previousState.count + 1 }
    default:
      return previousState
  }
}

export {
  pageIndex,
}
// export type { IPageIndexState }
