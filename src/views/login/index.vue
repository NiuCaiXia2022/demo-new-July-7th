<template>
  <div class="login">
    <div class="login-content">
    <!-- 登录 -->

     <el-form
    ref="loginRuleFormRef"
    :model="loginForm"
    :rules="rules"
    status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model.trim="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model.trim="loginForm.password" type="password" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model.trim="loginForm.code" class="codeimg" />
      <img :src="codeImg" class="img" @click="handleCodeImg">
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLoginSubmit"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Login from '../../api/user'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
// 验证
const loginRuleFormRef = ref('')
// 表单
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
// img
const codeImg = ref()
// 点击图片
const handleCodeImg = async () => {
  const data = await Login.getCaptcha()
  // console.log(data)
  codeImg.value = data.data.data.captchaImg
  loginForm.token = data.data.data.token
}
handleCodeImg()
// 验证
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 点击登录
const handleLoginSubmit = async () => {
  // ref 验证  必须是一块写下来的   不要问为什么 我也不知道
  if (!loginRuleFormRef.value) return
  await loginRuleFormRef.value.validate(async (valid) => {
    if (valid) {
      // console.log('点击登录', loginForm)
      await store.dispatch('user/getLogin', loginForm)
      router.push('/index')
    } else {
      console.log('error')
    }
  })
}
</script>
<style lang="scss" scoped>
.login-content {
  width: 500px;
  height: 500px;
  margin: 100px auto;
  .codeimg {
    width: 200px;
  }
  .img {
    width: 200px;
    height: 30px;
    background-color: red;
  }
}
</style>
