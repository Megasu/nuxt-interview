/**
 * 请求封装
 * @param url 请求
 * @param opts 配置
 */
export const useRequest: typeof useFetch = (url, opts?) => {
  return useFetch(url, {
    baseURL: 'https://interview-api-t.itheima.net/h5',
    headers: {
      // 注意 Bearer 和 后面的空格不能删除，为后台的token辨识
      Authorization: `Bearer ${getToken()}`,
    },
    ...opts,
  })
}
