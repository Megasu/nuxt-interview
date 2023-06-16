// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@vant/nuxt'],
  // 移动端适配
  // https://nuxt.com/docs/api/configuration/nuxt-config#postcss
  postcss: {
    // https://vant-ui.github.io/vant/#/zh-CN/advanced-usage#liu-lan-qi-gua-pei
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
    },
  },
})
