const KEY = 'mj-token'

// 获取
export const getToken = () => {
  return useCookie(KEY).value
}

// 设置
export const setToken = (newToken: string) => {
  useCookie(KEY).value = newToken
}

// 删除
export const delToken = () => {
  useCookie(KEY).value = undefined
}
