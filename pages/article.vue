<script setup lang="ts">
const token = getToken()

// 查询参数
const params = {
  current: 1,
  sorter: 'weight_desc',
  pageSize: 10,
}

const list = ref<any[]>([])
const loading = ref(false)
const finished = ref(false)

// 服务端直接获取数据
const onLoad = async () => {
  const { data } = await useFetch<any>(
    'http://interview-api-t.itheima.net/h5/interview/query',
    {
      params,
      headers: {
        // 注意 Bearer 和 后面的空格不能删除，为后台的token辨识
        Authorization: `Bearer ${token}`,
      },
    },
  )
  // 数组追加
  list.value.push(...data.value.data.rows)
  loading.value = false
  params.current++
  if (params.current > data.value.data.pageTotal) {
    finished.value = true
  }
}

onLoad()
</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="article-page">
      <nav class="my-nav van-hairline--bottom">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">最新</a>
        <div class="logo"><img src="~/assets/logo.png" alt="" /></div>
      </nav>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- 文章项组件 - 自动导入 -->
        <ArticleItem v-for="item in list" :key="item.id" :item="item" />
      </van-list>
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
