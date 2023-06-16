// 获取文章列表数据
export const getArticlesAPI = (params: object) => {
  return request.get('/interview/query', { params })
}
