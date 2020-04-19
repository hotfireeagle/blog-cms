import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { fetchData } from '../../util/fetch'

interface ITag {
  id: number
  name: string
}

interface IArticle {
  id: number
  title: string
  tags: Array<ITag>
}

interface IResponse {
  result: Array<IArticle>
  total: number
}

export const ArticleList: React.FC<any> = (props) => {
  const [apiResponse, setApiResponse] = useState<IResponse>()
  const history = useHistory()

  const loginCb = () => { history.push('/login') }

  // 设置文章列表数据的effect
  useEffect(() => {
    let isMount = true
    fetchData('/api/article/query', 'post', loginCb).then(data => {
      isMount && setApiResponse(data)
    })
    return () => { isMount = false }
  }, [])

  if (!apiResponse || !apiResponse.result) return <h1>loading</h1>
  return (
    <>
    <Link to="/newArticle">新建文章</Link>
    <ul>
      {
        apiResponse.result.map(articleObj => (
          <li key={articleObj.id}>
            <Link to={`/articleDetail/${articleObj.id}`}>{articleObj.title}</Link>
          </li>
        ))
      }
    </ul>
    </>
  )
}
