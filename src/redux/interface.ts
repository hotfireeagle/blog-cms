/**
 * 整个应用所维护的状态都在这里被定义
 */

import { IPageIndexState } from '../page/index/reducer'

export interface IAppState {
  pageIndex: IPageIndexState,
}
