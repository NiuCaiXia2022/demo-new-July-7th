<template>
  <!-- 右边 -->
  <div class="right-div">
    <div class="right-header-left">VueAdmin后台管理系统</div>

    <div class="right-header-right">
      <div>
        <img class="userImg" :src="store.getters.userinfo.data.data.avatar" />
      </div>
      <div class="right-one-style">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ $store.getters.userinfo.data.data.username || '' }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item command="out" @click="outUser"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>视频讲解</div>
      <div>网站</div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
console.log(store.getters.userinfo.data.data.username, '用户信息')
const handleCommand = (command) => {
  // console.log(command)
  if (command === 'out') return outUser()
}
// 退出登录
const outUser = async () => {
  console.log(123)
  await store.dispatch('user/outUserLogin')
  router.push('/login')
  // console.log(route.push('/login'))
}
</script>
<style lang="scss" scoped>
.right-div {
  color: #333;
  display: flex;
  height: 50px;
  line-height: 50px;
  width: 100%;
  .right-header-left {
    text-align: center;
    font-size: 8px;
    font-weight: 800;
    width: 600px;
    text-align: center;
  }
  .right-header-right {
    float: right;
    width: 200px;
    display: flex;
    & > div {
      width: 25%;
      font-size: 8px;
      text-align: center;
      line-height: 50px;
      color: #606266;
    }
    .right-one-style {
      margin-top: 17px;
    }
    .userImg {
      margin-top: 5px;
      width: 40px;
      height: 40px;
      border-radius: 50px;
    }
  }
}
</style>
