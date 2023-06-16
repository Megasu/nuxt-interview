// 白名单列表，记录无需权限访问的所有页面
const whiteList = ['/login', '/register']

export default defineNuxtRouteMiddleware((to, from) => {
  // 首页重定向
  if (to.path === '/') {
    return navigateTo('/article')
  }
  // 获取 token
  const token = getToken()
  if (!token && !whiteList.includes(to.path)) {
    return navigateTo('/login')
  }
})
