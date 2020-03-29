type Tobj2str = (obj: Object) => string

interface IObj {
  [key: string]: any
}

/**
 * 把对象转化为字符串的形式进行表示
 * @param obj ： 需要进行转换的对象参数
 */
const obj2str: Tobj2str = (obj: IObj) => {
  const keys = Object.keys(obj)
  const result: any[] = []
  keys.forEach(key => {
    result.push(`${key}=${obj[key]}`)
  })
  return result.join('&')
}

export {
  obj2str,
}