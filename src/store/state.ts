import { IndexPageStore } from '../page/index/interface'

export interface IStoreState {
  pageIndex: IndexPageStore
}

export interface IContext {
  appStore: IStoreState,
  dispatch: any
}

export const defaultStoreState: IStoreState = {
  pageIndex: {
    count: 1,
  }
}

