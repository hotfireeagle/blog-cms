export interface IStoreState {
  count: number
}

export interface IContext {
  appStore: IStoreState,
  dispatch: any
}

const storeState: IStoreState = {
  count: 1,
}

export {
  storeState,
}
