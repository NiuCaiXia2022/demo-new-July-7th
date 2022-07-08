<template>
  <div class="user-left">
    <div>
      <el-menu
        active-text-color="#cbcb40"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#ccc"
        unique-opened
        router
      >
        <MenuItem v-for="item in menuList" :key="item" :menu="item"></MenuItem>
      </el-menu>
    </div>
  </div>
</template>
<script setup>
import MenuItem from '../../components/MenuItem'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
// utils 文件  去除空children
import { filterMenuData } from '../../utils/menu.js'
// utils 文件  处理路由数据
import { filterRouter, generateMenus } from '../../utils/routes.js'
const router = useRouter()
// console.log(router.getRoutes()) // 所有路由信息

// 筛选的路由菜单
const menuList = computed(() => {
  const routes = filterRouter(router.getRoutes())
  // 所有路由信息  去空 children
  return filterMenuData(generateMenus(routes))
})
console.log(menuList) // 数据在value 里面
</script>
<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
