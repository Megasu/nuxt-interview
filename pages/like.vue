<script setup lang="ts">
import { getArticlesLike } from '~/api/article'
import { ref } from 'vue'

const list = ref<any[]>([])
const loading = ref(false)
const finished = ref(false)
const page = ref(1)

const onLoad = async () => {
  // 异步更新数据
  const { data } = await getArticlesLike(page.value)
  list.value.push(...data.rows)
  loading.value = false
  page.value++
  if (page.value > data.pageTotal) {
    finished.value = true
  }
}
</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="like-page">
      <van-nav-bar fixed title="我的点赞" />
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleItem v-for="(item, i) in list" :key="i" :item="item" />
      </van-list>
    </div>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.like-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
