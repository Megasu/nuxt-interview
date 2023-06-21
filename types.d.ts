/** 服务端响应结构 */
export interface ResData<T> {
  code: number
  data: T
  message: string
}

/** 登录/注册参数 */
export interface LoginParams {
  username: string
  password: string
}

/** 登录响应 */
export interface LoginRes {
  token: string
  currentAuthority: string
  status: string
  type: string
}

/** 用户的信息 */
export interface UserProfile {
  id: string
  username: string
  name: string
  avatar: string
  createdAt: string
  updatedAt: string
}

/** 面经列表参数 */
export type ArticleListParams = {
  current?: number
  keyWord?: string
  pageSize?: number
  sorter?: string
  stem?: string
}

/** 面经列表响应 */
export interface ArticleListRes {
  current: number
  pageTotal: number
  pageSize: number
  total: number
  rows: ArticleItem[]
}

/** 面经列表项 */
export interface ArticleItem {
  id: string
  stem: string
  content: string
  createdAt: string
  creator: string
  avatar: string
  likeCount: number
  views: number
}

/** 面经详情 */
export interface ArticleDetail extends ArticleItem {
  collectFlag: number
  likeFlag: number
}

/** 收藏、点赞参数参数 */
export interface LikeParams {
  id: string
  optType: number
}

/** 收藏、点赞参数参数 */
export interface LikeParams {
  id: string
  optType: number
}

/** 收藏、点赞参数参数 */
export type LikeListParams = {
  optType?: number
  page?: number
  pageSize?: number
}
