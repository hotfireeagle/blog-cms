import React from 'react'
import './index.scss'

const TopBarComponent: React.FC<any> = props => {
  return <div className='topbarComponentWrapper flexRow'>
    <span className='flexg'></span>
    <span>哈哈海</span>
  </div>
}

const TopBar = TopBarComponent

export {
  TopBar,
}
