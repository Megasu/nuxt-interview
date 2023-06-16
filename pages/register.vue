<script setup lang="ts">
// 表单数据
const form = reactive({
  username: 'itheima',
  password: '123456',
})

// 注册接口
const registerAPI = async (data: typeof form) => {
  return await useFetch('http://interview-api-t.itheima.net/h5/user/register', {
    method: 'POST',
    body: data,
  })
}

const onSubmit = async (values: typeof form) => {
  // 往后台发送注册请求了
  await registerAPI(values)
  alert('注册成功')
  navigateTo('/login')
}
</script>

<template>
  <div class="login-page">
    <van-nav-bar title="面经注册" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' },
        ]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <NuxtLink class="link" to="/login">有账号，去登录</NuxtLink>
  </div>
</template>

<style scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
