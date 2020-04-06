import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { fetchData } from '../../util/fetch'
import './index.scss'

const Tag: React.FC<any> = () => {

  const [tags, setTag] = useState([]) // 表示标签集合
  const history = useHistory()
  const location = useLocation()

  const loginCb = () => {
    history.replace({ pathname: '/login', state: { from: location } })
  }

  useEffect(() => {
    const url = '/api/tag/all'
    fetchData(url, 'GET', loginCb).then(data => {
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
