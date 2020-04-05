import * as React from 'react'
import { AppProvider } from './store/provider'
import { AppRoute } from './route'

export const App: React.FC<any> = () => (
  <AppProvider>
    <AppRoute />
  </AppProvider>
)
