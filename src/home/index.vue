<template>
  <div class="user-div">
    <div class="user-left">
      <el-menu
        active-text-color="#cbcb40"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#ccc"
        unique-opened
        router
      >
        <el-menu-item index="/index">
         <el-icon><Avatar /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu >
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="sys/users">
              <el-icon><Avatar /></el-icon>用户管理</el-menu-item>
            <el-menu-item index="/sys/roles">
              <el-icon><Avatar /></el-icon>角色管理</el-menu-item>
            <el-menu-item index="/sys/menus">
              <el-icon><Avatar /></el-icon>菜单管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu >
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统工具</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/dicts">
              <el-icon><Avatar /></el-icon>数字字典</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="user-rigth">
      <!-- 右边 -->
      <UserRight class="header"></UserRight>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import UserRight from './userRight'
</script>
<style lang="scss" scoped>
.user-div {
  width: 100%;
  height: 100%;
  display: flex;
  .user-left {
    width: 200px;
    height: 100vh;
    background-color: rgb(84, 92, 100);
    .el-menu {
      border: none;
    }
  }
  .user-rigth {
    height: 100vh;
    width: calc(100vw - 200px);
    .header {
      background-color: #17b3a3;
      line-height: 50px;
      height: 50px;
    }
  }
}
</style>
