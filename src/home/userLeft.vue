<template>
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
        <el-sub-menu index="7">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/sys/users">
              <el-icon><Avatar /></el-icon>用户管理</el-menu-item>
            <el-menu-item index="/sys/roles">
              <el-icon><Avatar /></el-icon>角色管理</el-menu-item>
            <el-menu-item index="/sys/menus">
              <el-icon><Avatar /></el-icon>菜单管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统工具</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/tool/dicts">
              <el-icon><Avatar /></el-icon>数字字典</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.user-left {
  width: 200px;
  height: 100vh;
  background-color: rgb(84, 92, 100);
  .el-menu {
    border: none;
  }
}
</style>
