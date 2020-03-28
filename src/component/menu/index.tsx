import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import classNames from 'classnames'
import { InitAppRoutes } from '../../constant/route'
import './index.scss'

const MenuComponent: React.FC<any> = (props: RouteComponentProps) => {

  const currentRoute: string = props.location.pathname;

  return (
    <nav className='menuComponentWrapper'>
      <h1 className='blogTitle'>夜游cola博客管理系统</h1>
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
