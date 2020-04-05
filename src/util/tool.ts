interface IObj {
  [key: string]: any
}

type Tobj2str = (obj: IObj) => string

type Tobj2arr = (obj: IObj) => Array<string>


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

/**
 * 从对象中提取出value，并把value压进数组在返回
 * @param obj : 需要进行转换的对象参数
 */
const obj2arr: Tobj2arr = (obj: IObj) => {
  const keys = Object.keys(obj)
  const result: any[] = []
  keys.forEach(key => result.push(obj[key]))
  return result
}

export {
  obj2str,
  obj2arr,
}