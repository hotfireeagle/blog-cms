import React, { useState, useEffect, ChangeEvent, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { AppContext } from '../../store/context'
import { fetchData } from '../../util/fetch'
import { ITag, IResponse, IArticle } from './interface'
import { setMenuDisplay } from '../../component/menu/action'
import 'react-quill/dist/quill.snow.css'
import './index.scss'

interface IParam {
  articleId?: string
}

const initArticleObj: IArticle = {
  content: '',
  title: '',
  tags: [],
}

// 富文本编辑器的配置数据
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
  const context = useContext(AppContext)

  const { dispatch } = context
  const moduleState = context.appStore.menu
  const { showMenu } = moduleState
  const [articleObj, setArticleObj] = useState<IArticle>(initArticleObj) // 文章数据的建模
  const [tags, setTags] = useState([] as ITag[]) // 标签列表数据的建模
  const [allScreen, setAllScreen] = useState(false) // 是否全屏

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
  }, [])

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
  }, [param.articleId])

  // 这个effect只在挂载的时候会被执行
  useEffect(() => {
    const eventHandler = (event: any) => {
      const keyCode = event.keyCode || event.which || event.charCode
      const ctrl = event.metaKey
      if (ctrl && keyCode === 75) { // comand + k 组合键进行全屏
        setAllScreen(old => !old)
      }
    }
    window.document.addEventListener('keydown', eventHandler)
    return () => {
      window.document.removeEventListener('keydown', eventHandler)
    }
  }, [])

  // FIXME: 修复加载数据的时候所遇到的问题
  const save = () => {
    fetchData('/api/article/new', 'post', loginCb, articleObj).then(res => {
      console.log('res', res)
    })
  }

  // 设置文章数据的handler
  const setArticleObjHandler = (key: 'title' | 'content', value: string) => {
    setArticleObj((currentState) => ({
      ...currentState,
      [key]: value
    }))
  }

  // 设置文章标题
  const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleObjHandler('title', event.target.value)
  }

  // 改变标签的时候触发
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

  // 监听点击因此左侧菜单
  const hideMenu = () => {
    dispatch({ type: setMenuDisplay, data: !showMenu })
  }

  return (
    <div className='articlePageWrapper'>
      <div className='row'>
        <input type='text' value={articleObj.title} onChange={setTitle} placeholder='请输入文章标题' className='inputC' />

        <select value={articleObj.tags[0] ? +articleObj.tags[0] : 0} onChange={tagChangeHandler}>
          {
            tags.map(tagObj => <option value={tagObj.id} key={tagObj.id}>{tagObj.name}</option>)
          }
        </select>

        <span className='flexg' />
        <button onClick={hideMenu} className='primaryBtn mr10'>{showMenu ? '隐藏菜单' : '显示菜单'}</button>
        <button onClick={save} className='primaryBtn'>更新</button>
      </div>
      {
        allScreen ?
        <>
          <div className='allScreen'></div>
          <ReactQuill className='rich' theme='snow' value={articleObj.content} onChange={setContentHandler} modules={modules} />
        </>
        :
        <ReactQuill theme='snow' value={articleObj.content} onChange={setContentHandler} modules={modules} />
      }
    </div>
  )
}

export {
  Article,
}
