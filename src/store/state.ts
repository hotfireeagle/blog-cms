import { IMenuModuleState } from '../component/menu/interface'

export interface IStoreState {
  menu: IMenuModuleState
}

export interface IContext {
  appStore: IStoreState,
  dispatch: any
}

export const defaultStoreState: IStoreState = {
  menu: {
    showMenu: true
  }
}
