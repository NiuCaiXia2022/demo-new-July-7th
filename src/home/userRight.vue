<template>
<div class="right">
  <div class="right-div">
    <!-- 右边 -->
    <div class="right-header-left">VueAdmin后台管理系统</div>
    <div class="right-header-right">
      <div>
        <img :src="headerImg" />
      </div>
      <div class="right-one-style">
        <el-dropdown>
          <span class="el-dropdown-link"> test </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click="outUser">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>视频讲解</div>
      <div>网站</div>
    </div>
  </div>
  <div class="right-view">
    <!-- 坑 -->
    <router-view></router-view>
  </div>
</div>

</template>
<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const headerImg = reactive()
const store = useStore()
const route = useRouter()
// 退出登录
const outUser = async () => {
  const response = await store.dispatch('user/outUserLogin')
  console.log(response)
  // route.push('/login')
  console.log(route.push('/login'))
}
</script>
<style lang="scss" scoped>
.right-div {
  width: 100%;
  height: 50px;
  color: #333;
  display: flex;

  .right-header-left {
    width: 75%;
    text-align: center;
    font-size: 8px;
    font-weight: 800;
  }
  .right-header-right {
    width: 200px;
    height: 50px;
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
  }
}
.right {
  width: 100%;
  height: 100vh;
  .right-view {
    width: 100%;
    height: calc(100vh - 50px);
  }
}
</style>
