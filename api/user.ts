import request from '../utils/request'

// 注册接口
export const registerAPI = (data: object) => {
  return request.post('/user/register', data)
}
