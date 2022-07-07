<template>
  <div class="user-div">
    <UserLeft></UserLeft>
    <div class="user-rigth">
      <!-- 右边 -->
      <UserRight class="header"></UserRight>
    </div>
  </div>
</template>
<script setup>
import UserRight from './userRight'
import UserLeft from './userLeft'
</script>
<style lang="scss" scoped>
.user-div {
  width: 100%;
  height: 100%;
  display: flex;
  .user-left{
    width: 200px;
  }
  .user-rigth {
    height: 100vh;
    width: calc(100vw - 200px);
    .user-rigth-bottom {
      height: calc(100vh - 50px);
    }
  }
}
</style>
