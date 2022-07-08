<template>
  <div class="tags-view">
    <ul>
      <li
        @click="handleTags(item.path)"
        v-for="(item, index) in tags"
        :key="index"
        :class="{ active: item.path === $route.path }"
      >
        <span>{{ item.title }}</span>
        <i
          @click.stop="handleDelTag(index, item.path)"
          v-if="item.path === $route.path"
          class="ele actice"
          >x</i
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()
// 数据监听
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.dispatch('tagsview/addTag', obj)
    }
  },
  {
    immediate: true,
    deep: true
  }
)
// tags 数据
const tags = computed(() => {
  return store.getters.tagsview
})
// 点击 li
const handleTags = (path) => {
  if (path) {
    router.push(path)
  }
}
// 删除
const handleDelTag = (index, routePath) => {
  console.log(routePath, '路径')
  if (routePath === '/index') {
    return
  }
  let path = ''
  if (index === tags.value.length - 1) {
    if (index !== 0) {
      path = tags.value[index - 1].path
        ? tags.value[index - 1].path
        : tags.value[index].path
    } else {
      path = tags.value[index].path
      return
    }
  } else if (tags.value.length !== 1) {
    path = tags.value[index + 1].path
  }
  router.push(path)
  store.dispatch('tagsview/delTag', index)
}
</script>
<style lang="scss" scoped>
.tags-view {
  height: 40px;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    position: relative;

    li {
      list-style: none;
      font-size: 12px;
      padding: 0 20px;
      border-right: 1px solid #eee;
      cursor: pointer;
      position: relative;
      .ele {
        display: inline-block;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 14px;
        margin-left: 5px;
        border-radius: 50%;
      }
      .ele:hover {
        background-color: #c0c4cc;
        color: #fff;
      }
    }
  }
  .active:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border: 1px solid #fff;
  }
}
</style>
