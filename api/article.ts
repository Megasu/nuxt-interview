// 喜欢
export const updateLikeAPI = (id: string) => {
  return request.post('interview/opt', { id, optType: 1 })
}

// 收藏
export const updateCollectAPI = (id: string) => {
  return request.post('interview/opt', { id, optType: 2 })
}
