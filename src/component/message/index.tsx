import React from 'react'
import ReactDOM from 'react-dom'
import { Message, MessageType } from './component'

interface IMessage {
  onShow: boolean, // 是否已存在显示的message弹窗
  targetDom: HTMLDivElement | null, // 挂载DOM节点
  readonly show: (content: string, type: MessageType, duration?: number) => void, // 显示弹窗
  readonly hide: () => void, // 隐藏弹窗
  success: (content: string, duration?: number) => void, // 弹窗的成功状态
  error: (content: string, duration?: number) => void, // 弹窗的错误状态
  warn: (content: string, duration?: number) => void, // 弹窗的警告状态
}

const message: IMessage = {

  onShow: false,

  targetDom: null,
  
  show(content: string, type: MessageType, duration: number=2000) {
    if (this.onShow) this.hide()
    this.onShow = true
    this.targetDom = document.createElement('div')
    this.targetDom.setAttribute('id', 'messageTargetJs')
    document.body.appendChild(this.targetDom)
    ReactDOM.render(<Message content={content} type={type} />, this.targetDom)

    setTimeout(this.hide.bind(this), duration)
  },

  hide() {
    this.targetDom && document.body.removeChild(this.targetDom)
    this.targetDom = null
    this.onShow = false
  },

  success(content: string, duration?: number) {
    const type: MessageType = 'success'
    this.show(content, type, duration)
  },

  error(content: string, duration?: number) {
    const type: MessageType = 'error'
    this.show(content, type, duration)
  },

  warn(content: string, duration?: number) {
    const type: MessageType = 'warn'
    this.show(content, type, duration)
  },

}

export {
  message,
}
