import { getToken } from './token'
import { obj2str } from './tool'
import { ApiCode } from '../constant/conf'
import { message } from '../component/message'

type HttpMethods = 'get' | 'GET' | 'post' | 'POST'

type FunType = (api: string, method: HttpMethods, loginCb?: () => void, data?: any) => Promise<any>

interface IResponse {
  status: ApiCode,
  data: any,
  message: string,
  [key: string]: any
}

/**
 * 获取数据的工具类方法
 * @param url : 路由名称
 * @param httpParams : 请求参数
 */
const fetchData: FunType = (url: string, method: HttpMethods, loginCb?: () => void, httpParams?: any) => {
  return new Promise((resolve, reject) => {
    let data: any;
    if (method.toLowerCase() === 'get') { // GET类请求
      data = {
        method: 'GET',
        headers: { 'token': getToken(), },
      }
      httpParams && (url = `${url}?${obj2str(httpParams)}`)
    } else { // POST类请求
      data = {
        method: 'POST',
        body: JSON.stringify(httpParams),
        headers: {
          'token': getToken(),
          'content-type': 'application/json',
        },
      }
    }
    fetch(url, data).then(res => res.json())
      .then((response: IResponse) => {
        if (response.status === ApiCode.SUCCESS) {
          resolve(response.data)
        } else if (response.status === ApiCode.UNAUTH) {
          loginCb && loginCb()
        } else if (response.status === ApiCode.ERROR) {
          message.error(response.message);
        }
      }).catch(err => {
        message.error(`解析JSON发生错误-接口为${url}`)
        reject(err)
      })
  })
}

export {
  fetchData,
}
