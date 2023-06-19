<script setup lang="ts">
// 获取数据
const { data } = await useRequest<any>('/user/currentUser')

// 映射数据
const { username, avatar } = toRefs(data.value.data)

// 退出登录
const logout = async () => {
  // 二次确认
  await showConfirmDialog({ message: '是否退出登录？' })
  // 删除 token
  delToken()
  // 弹窗提示
  showToast('退出成功')
  // 跳转页面
  navigateTo('/login')
}
</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="user-page">
      <div class="user">
        <img :src="avatar" alt="" />
        <h3>{{ username }}</h3>
      </div>
      <van-grid clickable :column-num="3" :border="false">
        <van-grid-item icon="clock-o" text="历史记录" to="/" />
        <van-grid-item icon="bookmark-o" text="我的收藏" to="/collect" />
        <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/like" />
      </van-grid>

      <van-cell-group class="mt20">
        <van-cell title="推荐分享" is-link />
        <van-cell title="意见反馈" is-link />
        <van-cell title="关于我们" is-link />
        <van-cell @click="logout" title="退出登录" is-link />
      </van-cell-group>
    </div>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.user-page {
  padding: 0 10px;
  background: #f5f5f5;
  height: 100vh;
  .mt20 {
    margin-top: 20px;
  }
  .user {
    display: flex;
    padding: 20px 0;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    h3 {
      margin: 0;
      padding-left: 20px;
      font-size: 18px;
    }
  }
}
</style>
