import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import ReactQuill from 'react-quill'
import { fetchData } from '../../util/fetch'
import 'react-quill/dist/quill.snow.css'

interface IArticle {
  title: string,
  content: string,
}

interface ITag {
  name: string,
  id: number,
}

interface IParam {
  articleId?: string
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

  const [value, setValue] = useState('')
  const [articleObj, setArticleObj] = useState({} as IArticle)
  const [tags, setTags] = useState([] as ITag[])

  const loginCb = () => {
    history.push('/login')
  }

  /** 设置标签的effect */
  useEffect(() => {
    fetchData('/api/tag/all', 'get', loginCb).then(response => {
      setTags(response)
    })
  }, [])

  /** 设置文章数据的effect */
  useEffect(() => {
    const articleId = param.articleId
    if (articleId != undefined) { // 说明是新增
      setArticleObj({} as IArticle)
    } else { // TODO: 说明是修改
      
    }
  }, [])

  return (
    <div className='pageWrapper'>
      <div className='row'>
        <label htmlFor='title'>文章标题</label>
        <input type='text' value={articleObj.title} id='title' />
      </div>

      <div className='row'>
        <label htmlFor='tag'>文章标签</label>
        <select id='tag'>
          {
            tags.map(tagObj => <option value={tagObj.id} key={tagObj.id}>{tagObj.name}</option>)
          }
        </select>
      </div>

      <button>更新</button>
      <ReactQuill theme='snow' value={value} onChange={setValue} modules={modules} />
    </div>
  )
}

export {
  Article,
}
