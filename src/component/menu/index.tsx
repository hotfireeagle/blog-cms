import React from 'react'
import { Link, withRouter, RouteComponentProps, useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { InitAppRoutes } from '../../constant/route'
import './index.scss'

const MenuComponent: React.FC<RouteComponentProps> = (props) => {
  const history = useHistory()
  const currentRoute: string = props.location.pathname

  const newArticleHandler = () => {
    history.push('/newArticle')
  }

  return (
    <nav className='menuComponentWrapper'>
      <h1 className='blogTitle'>博客管理系统</h1>
      <div className='newBtn flexcc'>
        <span onClick={newArticleHandler}>新建文章</span>
      </div>
      <div className='linkWrapper flexColumn'>
        {
          InitAppRoutes.map(routerObj => <Link
            className={classNames({ linkItem: true, flexRow: true, activeLink: currentRoute === routerObj.url })}
            key={routerObj.url}
            to={routerObj.url}
          >
            <img className='linkImg' src={routerObj.imgSrc} alt="net err" />
            <span>{routerObj.name}</span>
          </Link>)
        }
      </div>
    </nav>
  );
}

const Menu = withRouter(MenuComponent)

export {
  Menu,
}
