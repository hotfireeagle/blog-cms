import { pageIndex } from '../page/index/reducer'

export interface IAction {
  type: string
  [k: string]: any
}

type IReducer = (state: any, action: IAction) => {}

interface IReducerObj {
  reducer: IReducer
  actions: Array<string>
}

interface AppReducers {
  [k: string]: IReducerObj
}

/**
 * 找出当前action所对应找出对象，在设计上，只会更新第一个所匹配到的reducer，不会像react-redux所设计的那样一直匹配下去
 * @param appReducers : 整个应用的状态数据，应用的状态按照模块进行组织，利于模块化
 */
const combineReducers = (appReducers: AppReducers) => {
  return function(appStoreState: any, action: IAction) {
    const modules = Object.keys(appReducers)
    for (let i = 0, len = modules.length; i < len; i++) {
      const moduleName = modules[i]
      const moduleObj = appReducers[moduleName]
      const moduleActions = moduleObj.actions
      if (moduleActions.includes(action.type)) {
        const prevModuleState = appStoreState[moduleName]
        const moduleReducer = moduleObj.reducer
        const nextModuleState = moduleReducer(prevModuleState, action)
        return { ...appStoreState, [moduleName]: nextModuleState }
      }
    }
    return appStoreState // 此时由于返回同一个引用对象，react会根据Object.is算法判断认为两个值是相同的，此时不会触发更新
  }
}

export const reducer = combineReducers({
  pageIndex,
})
