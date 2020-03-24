import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IndexPage } from './page/index'

const AppRoute: React.FC<any> = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <IndexPage />
      </Route>
    </Switch>
  </Router>
)

export {
  AppRoute
}
