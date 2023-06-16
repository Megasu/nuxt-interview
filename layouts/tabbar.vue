<template>
  <div class="layout-page">
    首页架子 - 内容区域
    <slot />
    <van-tabbar>
      <van-tabbar-item icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
