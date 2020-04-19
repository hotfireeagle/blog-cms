import React, { useState, useEffect, ChangeEvent } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { fetchData } from '../../util/fetch'
import { IResponse, IArticle } from './interface'
import 'react-quill/dist/quill.snow.css'

interface ITag {
  name: string,
  id: number,
}

interface IParam {
  articleId?: string
}

const initArticleObj: IArticle = {
  content: '',
  title: '',
  tags: []
}

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] }, 'direction'],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
}

const Article: React.FC<any> = (props) => {
  const history = useHistory()
  const param = useParams<IParam>()

  const [articleObj, setArticleObj] = useState<IArticle>(initArticleObj) // 文章数据的建模
  const [tags, setTags] = useState([] as ITag[]) // 标签列表数据的建模

  const loginCb = () => {
    history.push('/login')
  }

  /** 设置标签列表数据的effect */
  useEffect(() => {
    let mount = true
    fetchData('/api/tag/all', 'get', loginCb).then(response => {
      mount && setTags(response)
    })
    return () => { mount = false }
  }, [loginCb])

  /** 设置文章数据的effect */
  useEffect(() => {
    let mount = true
    const articleId = param.articleId
    if (articleId != undefined) { // 修改文章的情况
      fetchData(`/api/article/${articleId}`, 'get', loginCb).then((res: IResponse) => {
        const result = {
          ...res,
          tags: res.tags.map(tagObj => tagObj.id)
        }
        mount && setArticleObj(result)
      })
    } else { // 新增文章的情况
      mount && setArticleObj(initArticleObj)
    }
    return () => { mount = false }
  }, [loginCb, param.articleId])

  /** 保存的逻辑 */
  const save = () => {
    fetchData('/api/article/new', 'post', loginCb, articleObj).then(res => {
      console.log('res', res)
    })
  }

  const setArticleObjHandler = (key: 'title' | 'content', value: string) => {
    setArticleObj((currentState) => ({
      ...currentState,
      [key]: value
    }))
  }

  const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleObjHandler('title', event.target.value)
  }

  const tagChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const tags = [event.target.value]
    setArticleObj(currentState => ({
      ...currentState,
      tags
    }))
  }

  // 富文件内容发生变化的监听方法
  const setContentHandler = (value: string) => {
    setArticleObjHandler('content', value)
  }
  return (
    <div className='pageWrapper'>
      <div className='row'>
        <label htmlFor='title'>文章标题</label>
        <input type='text' value={articleObj.title} onChange={setTitle} id='title' />
      </div>

      <div className='row'>
        <label htmlFor='lieDay'>文章标签</label>
        <select id='lieDay' value={articleObj.tags[0] ? +articleObj.tags[0] : 0} onChange={tagChangeHandler}>
          {
            tags.map(tagObj => <option value={tagObj.id} key={tagObj.id}>{tagObj.name}</option>)
          }
        </select>
      </div>

      <button onClick={save}>更新</button>
      <ReactQuill theme='snow' value={articleObj.content} onChange={setContentHandler} modules={modules} />
    </div>
  )
}

export {
  Article,
}
