<script setup lang="ts">
// SEO 优化
useSeoMeta({
  title: '黑马面经 - 找工作神器|笔试题库|面试经验',
  description:'求职之前，先上黑马面经，就业找工作一站解决。全面提升求职竞争力，找到好工作，拿到好offer。',
  author: '黑马程序员',
})
</script>

<template>
  <!-- 路由占位 -->
  <NuxtPage :keepalive="{ max: 10 }" />
</template>

<style>
:root {
  --van-primary-color: #fa6d1d !important;
}
</style>
