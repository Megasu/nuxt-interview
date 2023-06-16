<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="article-page">
      <nav class="my-nav van-hairline--bottom">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">最新</a>
        <div class="logo"><img src="~/assets/logo.png" alt="" /></div>
      </nav>

      <van-cell class="article-item">
        <template #title>
          <div class="head">
            <img
              src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png"
              alt=""
            />
            <div class="con">
              <p class="title van-ellipsis">宇宙头条校招前端面经</p>
              <p class="other">不风流怎样倜傥 | 2022-01-20 00-00-00</p>
            </div>
          </div>
        </template>
        <template #label>
          <div class="body van-multi-ellipsis--l2">
            笔者读大三, 前端小白一枚, 正在准备春招, 人生第一次面试,
            投了头条前端, 总共经历了四轮技术面试和一轮hr面, 不多说,
            直接上题&nbsp;一面
          </div>
          <div class="foot">点赞 46 | 浏览 332</div>
        </template>
      </van-cell>
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
