import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { message } from '../../component/message'
import { fetchData } from '../../util/fetch'
import { saveToken } from '../../util/token'
import './index.scss'

interface HasFrom {
  from: any
}

const Login: React.FC<any> = props => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const location = useLocation()

  const { from } = location.state as HasFrom || { from: { pathname: '/' } }

  const handleLogin = async () => {
    const obj = { name, password }
    const api = '/api/user/login'
    const token = await fetchData(api, 'post', undefined, obj)
    message.success('登录成功')
    saveToken(token)
    history.replace(from)
  }

  return (
    <div className='loginComponentWrapper'>
      <div className='loginBody flexColumn'>
        <h4 className='title'>登录以继续</h4>
        <div className='inputRow'>
          <label htmlFor='nameArea'>账户</label>
          <input value={name} onChange={event => setName(event.target.value)} type='name' id='nameArea' />
        </div>
        <div className='inputRow'>
          <label htmlFor='passwordArea'>密码</label>
          <input value={password} onChange={event => setPassword(event.target.value)} type='password' id='passwordArea' />
        </div>
        <button onClick={handleLogin}>登录</button>
      </div>
      <div className='copyRight'>由前端React+后端Ｎest驱动</div>
    </div>
  )
}

export {
  Login,
}
