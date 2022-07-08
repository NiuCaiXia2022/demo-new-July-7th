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
        <template v-for="item in menuList" :key="item">
          <template v-if="!item.children">
            <el-menu-item :index="item.path">
              <el-icon><Avatar /></el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
          <template v-if="item.children && item.children.length > 0">
            <el-sub-menu :ndex="item.path">
              <template #title>
                <el-icon><location /></el-icon>
                <span>{{ item.meta.title }}</span>
              </template>

              <template v-for="ele in item.children" :key="ele">
                <template v-if="!ele.children">
                  <el-menu-item :index="ele.path">
                    <el-icon><Avatar /></el-icon>
                    <span>{{ ele.meta.title }}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-sub-menu>
          </template>
          <menuItem></menuItem>
        </template>
        <!-- <el-menu-item index="/index">
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
              <el-icon><Avatar /></el-icon>用户管理</el-menu-item
            >
            <el-menu-item index="/sys/roles">
              <el-icon><Avatar /></el-icon>角色管理</el-menu-item
            >
            <el-menu-item index="/sys/menus">
              <el-icon><Avatar /></el-icon>菜单管理</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统工具</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/tool/dicts">
              <el-icon><Avatar /></el-icon>数字字典</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu> -->
      </el-menu>
    </div>
  </div>
</template>
<script setup>
// 子组件
import { menuItem } from '../../home/modules/menuItem'
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
