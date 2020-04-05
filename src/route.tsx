import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { getToken } from './util/token'
import { Menu } from './component/menu/index'
import { TopBar } from './component/topbar/index'
import { IndexPage } from './page/index'
import { Page404 } from './page/404'
import { Login } from './page/login'
import { Tag } from './page/tag'

export const AppRoute: React.FC<any> = () => {

  const [token, setToken] = useState(getToken()) // 表示是否登录的状态

  // TODO: 没必要每次都进行检验；只获取一次明显也是不行的
  useEffect(() => {
    const token = getToken()
    console.log(token)
    setToken(token)
  }, []) // 第一次挂载的时候读取一下本地数据．一个问题：如果后面登录状态更新，是否会触发该组件更新，如果会的话，这里只执行一次？

  return (
    <Router>
      <Menu />
      <section className='appRightContainer'>
        <TopBar />
        <div className='appRightContentWrapper'>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            {
              token ?
              <>
                <Route exact path='/'>
                  <IndexPage />
                </Route>
                <Route path='/tag'>
                  <Tag />
                </Route>
                <Route path='*'>
                  <Page404 />
                </Route>
              </>
              :
              <Redirect to={{ pathname: '/login' }} />
            }
          </Switch>
        </div>
      </section>
    </Router>
  )
}
