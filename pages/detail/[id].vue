<script setup lang="ts">
import { updateCollectAPI, updateLikeAPI } from '~/api/article'

const id = useRoute().params.id as string
// 获取文章详情
const { data } = await useRequest<any>('/interview/show', {
  params: { id },
})

// 提取文章数据
const article = toRef(data.value.data)

// 喜欢
const toggleLike = async () => {
  await updateLikeAPI(id)
  article.value.likeFlag = !article.value.likeFlag
  if (article.value.likeFlag) {
    article.value.likeCount++
    showSuccessToast('点赞成功')
  } else {
    article.value.likeCount--
    showToast('取消点赞')
  }
}

// 收藏
const toggleCollect = async () => {
  await updateCollectAPI(id)
  article.value.collectFlag = !article.value.collectFlag
  if (article.value.collectFlag) {
    showSuccessToast('收藏成功')
  } else {
    showToast('取消收藏')
  }
}

// SEO 优化
useSeoMeta({
  title: article.value.stem + '- 黑马面经',
})
</script>

<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详细"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 |
        {{ article.likeCount }} 点赞数
      </p>
      <p>
        <img :src="article.avatar" alt="" />
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <div class="opt">
      <van-icon
        @click="toggleLike"
        :class="{ active: article.likeFlag }"
        name="like-o"
      />
      <van-icon
        @click="toggleCollect"
        :class="{ active: article.collectFlag }"
        name="star-o"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
