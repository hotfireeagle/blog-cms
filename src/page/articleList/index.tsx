import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { fetchData } from '../../util/fetch'
import LoadingWrapper from '../../component/loadingWrapper'
import { ITag, IArticleListResponse } from '../../data.interface'
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

  // 生成背景颜色
  const returnColor = () => {
    const colors = ['#eb2f96', '#2f54eb', '#52c41a']
    const idx = Math.floor((Math.random() * colors.length))
    return colors[idx]
  }

  // 渲染标签数据
  const renderTags = (tags: Array<ITag>) => {
    return tags.map(tagObj => {
      const c = returnColor()
      return (
        <span key={tagObj.id} className='tagItem' style={{ color: c, border: `1px solid ${c}` }}>
          {tagObj.name}
        </span>
      )
    })
  }

  return (
    <LoadingWrapper
      loading={loading}
      height="600"
    >
      <div className='articleListComponentWrapper'>
        <div className='header row'>
          <div>标题</div>
          <div>标签</div>
          <div>发布时间</div>
          <div>操作</div>
        </div>
        {
          apiResponse && apiResponse.result.map(articleObj => (
            <div className='articleItem row' key={articleObj.id}>
              <div>{articleObj.title}</div>
              <div className='tagListWrapper'>
                {renderTags(articleObj.tags)}
              </div>
              <div>{articleObj.date}</div>
              <Link to={`/articleDetail/${articleObj.id}`} className='clickSpan'>编辑</Link>
            </div>
          ))
        }
      </div>
    </LoadingWrapper>
  )
}
