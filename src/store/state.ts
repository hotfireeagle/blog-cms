export interface IStoreState {
  [k: string]: any
}

export interface IContext {
  appStore: IStoreState,
  dispatch: any
}

const storeState: IStoreState = {
  pageIndex: {
    count: 1,
  }
}

export {
  storeState,
}
