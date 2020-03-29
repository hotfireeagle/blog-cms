import { getToken } from './token'
import { obj2str } from './tool'
import { ApiCode } from '../constant/conf'

type HttpMethods = 'get' | 'GET' | 'post' | 'POST'

type FunType = (a: string, b: HttpMethods, c: any) => Promise<any>

interface IResponse {
  code: ApiCode,
  data: any,
  message: string,
  [key: string]: any
}

/**
 * 获取数据的工具类方法
 * @param url : 路由名称
 * @param httpParams : 请求参数
 */
const fetchData: FunType = (url: string, method: HttpMethods, httpParams: any) => {
  return new Promise((resolve, reject) => {
    let data: any;
    if (method.toLowerCase() === 'get') { // GET类请求
      data = {
        method: 'GET',
        headers: { 'token': getToken(), },
      }
      url = `${url}?${obj2str(httpParams)}`
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
      .catch(err => {
        
      }) // TODO: 需要在这里进行弹窗
      .then((response: IResponse) => {
        if (response.code === ApiCode.SUCCESS) {
          resolve(response.data)
        } else if (response.code === ApiCode.UNAUTH) { // TODO: 需要跳转到登录页面
          
        } else if (response.code === ApiCode.ERROR) { //　TODO: 报错

        }
      }) // 在这里对响应数据做个处理
  })
}

export {
  fetchData,
}
