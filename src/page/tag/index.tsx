import React, { useState, useEffect } from 'react'
import { fetchData } from '../../util/fetch'
import './index.scss'

const Tag: React.FC<any> = () => {

  const [tags, setTag] = useState([]) // 表示标签集合

  useEffect(() => {
    const url = '/api/tag/all'
    fetchData(url, 'GET').then(data => {
      console.log('data is', data)
    })
  }, []) // 只需加载一次

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
