import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const MenuComponent: React.FC<any> = props => {
  console.log('props is', props);
  return (
    <div>
      <h1>Menu component</h1>
      <Link to='/'>index</Link>
      <Link to='/abc?12'>abc</Link>
    </div>
  );
}

const Menu = withRouter(MenuComponent)

export {
  Menu
}
