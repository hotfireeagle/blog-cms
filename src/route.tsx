import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Menu } from './component/menu/index'
import { TopBar } from './component/topbar/index'
import { IndexPage } from './page/index'
import { Page404 } from './page/404'
import { Login } from './page/login'
import { Tag } from './page/tag'

const AppRoute: React.FC<any> = () => {

  console.error('wr')

  return (
    <Router>
      <Menu />
      <section className='appRightContainer'>
        <TopBar />
        <div className='appRightContentWrapper'>
          <Switch>
            <Route exact path='/'>
              <IndexPage />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
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
}

export {
  AppRoute,
}
