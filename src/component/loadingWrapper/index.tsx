import React from 'react'
import './index.scss'

interface IProps {
  children: any
  height: number | string
  loading: boolean
}

const LoadingWrapper: React.FC<IProps> = props => {
  return (
    <>
    {
      props.loading ?
      <div className='loadingWrapper' style={{ height: props.height }}>
        <img className='img' style={{ maxHeight: props.height }} src='http://img2.imgtn.bdimg.com/it/u=3381596572,1571513985&fm=214&gp=0.jpg' />
      </div>
      :
      props.children
    }
    </>
  )
}

export default LoadingWrapper