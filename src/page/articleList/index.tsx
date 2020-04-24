import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { fetchData } from '../../util/fetch'
import LoadingWrapper from '../../component/loadingWrapper'
import { IArticleListResponse } from '../../data.interface'
import './index.scss'

export const ArticleList: React.FC<any> = (props) => {
  const [apiResponse, setApiResponse] = useState<IArticleListResponse>() // 对接口所返回的数据进行建模
  const [loading, setLoading] = useState(false) // 表示处于加载过程中
  const history = useHistory()

  const loginCb = () => { history.push('/login') }

  // 设置文章列表数据的effect
  useEffect(() => {
    let isMount = true // 为什么要加这句是因为fetchData是具有卸载该组件的
    setLoading(true)
    fetchData('/api/article/query', 'post', loginCb).then(data => {
      isMount && setApiResponse(data)
      setLoading(false)
    })
    return () => { isMount = false }
  }, [])

  return (
    <LoadingWrapper
      loading={loading}
      height="600"
    >
      <div className='articleListComponentWrapper'>
        <div className='header row'>
          <div className='w4'>标题</div>
          <div className='w2'>标签</div>
          <div className='w2'>发布时间</div>
          <div className='w2'>操作</div>
        </div>
        {
          apiResponse && apiResponse.result.map(articleObj => (
            <div key={articleObj.id}>
              <Link to={`/articleDetail/${articleObj.id}`}>{articleObj.title}</Link>
            </div>
          ))
        }
      </div>
    </LoadingWrapper>
  )
}
