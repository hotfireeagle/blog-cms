import * as React from 'react'
import { AppProvider } from './store/provider'
// import { Provider } from 'react-redux'
import { AppRoute } from './route'
// import { store } from './redux/store'

const App: React.FC<any> = () => (
  <AppProvider>
    <AppRoute />
  </AppProvider>
)

export {
  App,
}
