import React from 'react'
import { Route, Redirect, RouteComponentProps, withRouter } from 'react-router-dom'
import { getToken } from '../../util/token'

interface IProps {
  children: any
  path: string
  exact?: boolean
}

type PRR = RouteComponentProps & { children: any }

const PrivateRouteRender: React.FC<PRR> = (props) => {
  const token = getToken()
  if (token) return props.children
  return <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
}

const PrivateRouteRenderWrapper = withRouter(PrivateRouteRender)

const PrivateRoute: React.FC<IProps> = (props) => (
  <Route path={props.path} exact={!!props.exact} render={() => <PrivateRouteRenderWrapper children={props.children} />} />
)

export default PrivateRoute