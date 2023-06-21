<script setup lang="ts">
import { getArticlesCollect } from '~/api/article'
import { ref } from 'vue'

const list = ref<any[]>([])
const page = ref(1)
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

const onLoad = async () => {
  // 如果下拉刷新则重置数据
  if (refreshing.value) {
    list.value = []
    page.value = 1
    refreshing.value = false
  }
  // 异步更新数据
  const { data } = await getArticlesCollect(page.value)
  list.value.push(...data.rows)
  loading.value = false
  page.value++
  if (page.value > data.pageTotal) {
    finished.value = true
  }
}

const onRefresh = () => {
  // 清空列表数据
  finished.value = false
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}
</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="collect-page">
      <van-nav-bar fixed title="我的收藏" />
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ArticleItem v-for="(item, i) in list" :key="i" :item="item" />
        </van-list>
      </van-pull-refresh>
    </div>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
