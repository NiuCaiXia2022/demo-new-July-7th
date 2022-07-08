<template>
  <div>
    <!-- 菜单数据 -->
    {{ props }}
  </div>
</template>
<script setup>
// 子组件接收
import { defineProps } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
