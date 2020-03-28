import * as React from 'react'
import { Provider } from 'react-redux'
import { AppRoute } from './route'
import { store } from './redux/store'

const App: React.FC<any> = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
)

export {
  App,
}
