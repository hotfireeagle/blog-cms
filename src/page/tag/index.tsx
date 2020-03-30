import React from 'react'
import './index.scss'

const Tag: React.FC<any> = (props) => {
  return (
    <div className='inputPageWrapper'>

      <div className='inputWrapper'>
        <input type='text' />
        <button>增加标签</button>
      </div>
      
    </div>
  )
}

export {
  Tag,
}
