// 喜欢
export const updateLikeAPI = (id: string) => {
  return request.post('interview/opt', { id, optType: 1 })
}

// 收藏
export const updateCollectAPI = (id: string) => {
  return request.post('interview/opt', { id, optType: 2 })
}

// 获取收藏列表
export const getArticlesCollect = (page: number) => {
  return request.get('/interview/opt/list', {
    params: {
      page, // 当前页
      pageSize: 5, // 页容量
      optType: 2, // 表示收藏
    },
  })
}

// 获取喜欢列表
export const getArticlesLike = (page: number) => {
  return request.get('/interview/opt/list', {
    params: {
      page, // 当前页
      pageSize: 5, // 页容量
      optType: 1, // 表示喜欢
    },
  })
}
