import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { message } from '../message/index'
import { fetchData } from '../../util/fetch'
import './index.scss'

interface IProps {
  closeModal: () => void // 关闭模态
  updateList: () => void // 更新列表
}

export const AddTagComponent: React.FC<IProps> = (props) => {
  const [name, setName] = useState('')
  const history = useHistory()
  const location = useLocation()

  const loginCb = () => {
    history.replace({ pathname: '/login', state: { from: location }})
  }

  const addTag = () => {
    const url = '/api/tag/new'
    fetchData(url, 'POST', loginCb, { name }).then(() => { message.show('操作成功', 'success') })
  }

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)
  }

  return (
    <div className='addTagComponentWrapper' onClick={props.closeModal}>
      <div className='modalWrapper'>
        <div className='modalHeader flexRow'>增加标签</div>
        <div className='modalBody flexRow'>
          <input value={name} onChange={nameChangeHandler} className='w472' placeholder='请输入标签名' type='text' />
        </div>
        <div className='modalFooter flexRow'>
          <span className='flexg'></span>
          <button className='sureBtn flexcc' onClick={addTag}>确定</button>
        </div>
      </div>
    </div>
  )
}