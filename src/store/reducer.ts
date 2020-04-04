import { IStoreState } from './state'

const reducer = (state: IStoreState, action: any) => {
  switch(action.type) {
    case 'ADD':
      return { count: state.count + 1 }
    case 'DEC':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export {
  reducer,
}
