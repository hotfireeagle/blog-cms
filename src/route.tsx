import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContext } from './store/context'
import { PrivateRoute } from './privateRoute'
import { Menu } from './component/menu/index'
import { Page404 } from './page/404'
import { Login } from './page/login'
import { Tag } from './page/tag'
import { Article } from './page/article'
import { ArticleList } from './page/articleList'

export const AppRoute: React.FC<any> = () => {
  const appContext = useContext(AppContext)
  
  const moduleMenu = appContext.appStore.menu
  const { showMenu } = moduleMenu
  return (
    <Router>
      {showMenu && <Menu />}
      <section className={showMenu ? 'appRightContainer' : 'appRightContainerNml'}>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/' exact={true}>
            <ArticleList />
          </PrivateRoute>
          <PrivateRoute path='/tag'>
            <Tag />
          </PrivateRoute>
          <PrivateRoute path='/newArticle'>
            <Article />  
          </PrivateRoute>'
          <PrivateRoute path='/articleDetail/:articleId'>
            <Article />
          </PrivateRoute>
          <PrivateRoute path='/articleList'>
            <ArticleList />
          </PrivateRoute>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </section>
    </Router>
  )
}
