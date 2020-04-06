import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './privateRoute'
import { Menu } from './component/menu/index'
import { TopBar } from './component/topbar/index'
import { IndexPage } from './page/index'
import { Page404 } from './page/404'
import { Login } from './page/login'
import { Tag } from './page/tag'

export const AppRoute: React.FC<any> = () => (
  <Router>
    <Menu />
    <section className='appRightContainer'>
      <TopBar />
      <div className='appRightContentWrapper'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path="/" exact={true}>
            <IndexPage />
          </PrivateRoute>
          <Route path='/tag'>
            <Tag />
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </section>
  </Router>
)
