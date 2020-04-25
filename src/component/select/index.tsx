import React, { useState } from 'react'
import './index.scss'

type TValueHandler = (id: string) => any

interface IOption {
  id: number | string
  name: string
  [key: string]: any
}

interface IProps {
  options: Array<IOption> // 可选项
  valueChangeHandler: TValueHandler // 值发生改变之后的回调
  placeHolder: string // 占位值
  width: number | string // 如果是字符串需要带上单位
  height: number | string
  value?: number | string
}


const Select: React.FC<IProps> = (props) => {
  const [showOptions, setShowOpitons] = useState(false) // 表示是否显示下拉框

  const setShowOpitonsHandler = () => {
    setShowOpitons(value => !value)
  }

  const choseTagHandler = (optionObj: IOption) => {
    const id = optionObj.id + ''
    props.valueChangeHandler(id)
    setShowOpitons(false)
  }

  const findTagName = (id: number | string): string | undefined => {
    return props.options.find(obj => obj.id == id)?.name
  }

  return (
    <div className='selectComponentWrapper' style={{ width: props.width, height: props.height }}>
      <div className={props.value ? 'valueDiv' : 'valueDiv pl'} onClick={setShowOpitonsHandler}>{props.value ? findTagName(props.value) : props.placeHolder}</div>

      {
        showOptions && 
        <div className='optionWrapper' style={{ top: +(props.height) }}>
          <div className='flexItemWrapper'>
          {
            props.options.map(optionObj => (
              <div
                key={optionObj.id}
                className='optionItem'
                style={{ height: props.height }}
                onClick={() => choseTagHandler(optionObj)}
              >{optionObj.name}</div>
            ))
          }
          </div>
        </div>
      }
    </div>
  )
}

export default Select