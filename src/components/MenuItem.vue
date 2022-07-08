<template>
  <div>
    <!-- 菜单组件 -->
    <!-- {{ item }} -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
        <el-icon><Avatar /></el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <MenuItem
          v-for="ele in item.children"
          :key="ele"
          :menu="ele"
        ></MenuItem>
      </el-sub-menu>
    </template>
  </div>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
})
const item = computed(() => {
  return props.menu
})
</script>
<style lang="scss" scoped></style>
