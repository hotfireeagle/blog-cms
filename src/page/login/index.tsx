import React, { useState, useEffect } from 'react'
import { message } from '../../component/message'
import './index.scss'

const Login: React.FC<any> = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => { message.success('这是一段测试内容') })

  return (
    <div className='loginComponentWrapper'>
      <div className='loginBody flexColumn'>
        <h4 className='title'>登录以继续</h4>
        <div className='inputRow'>
          <label htmlFor='emailArea'>邮箱</label>
          <input value={email} onChange={event => setEmail(event.target.value)} type='email' id='emailArea' />
        </div>
        <div className='inputRow'>
          <label htmlFor='passwordArea'>密码</label>
          <input value={password} onChange={event => setPassword(event.target.value)} type='password' id='passwordArea' />
        </div>
        <button>登录</button>
      </div>
      <div className='copyRight'>由前端React+后端Ｎest驱动</div>
    </div>
  )
}

export {
  Login,
}
