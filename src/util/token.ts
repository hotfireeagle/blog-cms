/**
* 将token存储到本地localStorage
* @param token 
*/
const saveToken: (t: string) => boolean = (token: string) => {
  if (!localStorage) return false
  try {
    localStorage.setItem('token', token)
  } catch(err) {
    return false
  }
  return true
}

/**
 * 从本地localStorage中取出token
 */
const getToken: () => string = () => {
  const token = localStorage.getItem('token')
  return token || ''
}

export {
  saveToken,
  getToken,
}
