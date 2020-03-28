import { createStore, combineReducers } from 'redux'
import { pageIndex } from '../page/index/reducer'

const reducers = combineReducers({
  pageIndex
})

const store = createStore(reducers)

export {
  store,
}
