import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IndexPage } from './page/index'
import { Menu } from './component/menu/index'
import { Page404 } from './page/404'

const AppRoute: React.FC<any> = () => (
  <Router>
    <Menu />
    <section className='appRightContainer'>
      <Switch>
        <Route exact path='/'>
          <IndexPage />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </section>
  </Router>
)

export {
  AppRoute
}
