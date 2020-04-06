import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { TagItem } from '../../component/tagItem'
import { fetchData } from '../../util/fetch'
import { AddTagComponent } from '../../component/addTag'
import { ITag } from './interface'
import './index.scss'

const initialTags: ITag[] = []

export const Tag: React.FC<any> = () => {

  const [tags, setTag] = useState(initialTags) // 表示标签集合
  const [showModal, setShowModal] = useState(false) // 表示是否显示输入的模态

  const history = useHistory()
  const location = useLocation()

  const loginCb = () => { history.replace({ pathname: '/login', state: { from: location } }) }

  const updateList = () => {}

  const closeModal = () => {}

  useEffect(() => {
    const url = '/api/tag/all'
    fetchData(url, 'GET', loginCb).then(data => { setTag(data) })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='inputPageWrapper'>
      { tags.map(tagObj => (<TagItem key={tagObj.id} tagObj={tagObj} />)) }
      <div className='emptyAdd flexcc' onClick={() => setShowModal(true)}>
        <span className='addIcon'>+</span>
      </div>
      { showModal && <AddTagComponent closeModal={closeModal} updateList={updateList} /> }
    </div>
  )
}
