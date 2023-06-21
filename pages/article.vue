<script setup lang="ts">
// 查询参数
const params = reactive({
  current: 1, // 当前页码
  sorter: 'weight_desc', // 排序方式
  pageSize: 10, // 页容量
})

// 文章列表
const list = ref<any[]>([])
// 加载中标识、已完成标识
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

// 服务端直接获取数据
const onLoad = async () => {
  // 如果下拉刷新则重置数据
  if (refreshing.value) {
    list.value = []
    params.current = 1
    refreshing.value = false
  }
  // 获取数据
  const { data } = await useRequest<any>('/interview/query', {
    // 如果是 reactive 会监听变化重新发送请求
    params: { ...params },
  })
  // 数组追加
  list.value.push(...data.value.data.rows)
  // 更新加载中标识
  loading.value = false
  // 页面累加
  params.current++
  // 如果当前页码大于总页数，说明已加载完所有数据
  if (params.current > data.value.data.pageTotal) {
    finished.value = true
  }
}

// 页面加载时自动加载数据
onLoad()

const onRefresh = () => {
  // 清空列表数据
  finished.value = false
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}

const changeSorter = (value: string) => {
  params.sorter = value
  // 重置所有条件
  params.current = 1 // 排序条件变化，重新从第一页开始加载
  list.value = []
  finished.value = false // finished重置，重新有数据可以加载了
  // 手动调用了加载更多，也需要手动将 loading 改成 true，表示正在加载中（避免重复触发）
  loading.value = true
  onLoad()
}
</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="article-page">
      <nav class="my-nav van-hairline--bottom">
        <a
          @click="changeSorter('weight_desc')"
          :class="{ active: params.sorter === 'weight_desc' }"
          href="javascript:;"
        >
          推荐
        </a>
        <a
          @click="changeSorter('')"
          :class="{ active: params.sorter === '' }"
          href="javascript:;"
        >
          最新
        </a>
        <div class="logo"><img src="~/assets/logo.png" alt="" /></div>
      </nav>

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- 文章项组件 - 自动导入 -->
          <ArticleItem v-for="item in list" :key="item.id" :item="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
