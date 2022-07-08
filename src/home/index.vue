<template>
  <div class="user-login">
    <el-container>
      <el-aside width="200px">
        <!-- <user-left></user-left> -->
        <UserLeft></UserLeft>
      </el-aside>

      <el-container>
        <el-header>
          <user-right></user-right>
        </el-header>

        <el-main>
          <user-bottom></user-bottom>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import UserLeft from './modules/userLeft'
import UserRight from './modules/userRight'
import UserBottom from './modules/userBottom'
</script>
<style lang="scss" scoped>
.el-aside {
  background-color: #545c64;
  height: 100vh;
  width: 200px;
}
.el-header {
  background-color: #17b3a3;
  height: 50px;
}
.user-left {
  width: 200px;
}
// .el-main {
// }
</style>
