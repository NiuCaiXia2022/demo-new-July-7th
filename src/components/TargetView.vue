<template>
  <div class="tags-container">
    <ul>
      <li
        @click="handleCurrentTag(index, item.path)"
        v-for="(item, index) in tags"
        :key="index"
        :class="{ active: item.path === $route.path }"
      >
        {{ item.title }}
        <span
          class="icon-close"
          v-if="$route.path === item.path"
          @click="handleDelTag(index, item.path)"
          ><el-icon><Close /></el-icon>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const store = useStore()

// 数据监听
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    console.log(toPath)
    if (route.meta && route.meta.title && route.meta.icon) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      console.log(obj)
      store.dispatch('tagsview/addTag', obj)
    }
  },
  {
    immediate: true,
    deep: true
  }
)

// 获取tags数据
const tags = computed(() => {
  return store.getters.tags
})
console.log(tags, 'tag')

// 点击tag跳转
const handleCurrentTag = (index, path) => {
  router.push(path)
}

// 点击删除
const handleDelTag = (index, path) => {
  console.log('下标===>', index)
  // console.log(tags.value)
  // 留下最后一个
  if (path === '/login') {
    // console.log('哈哈哈')
    return
  }
  let routePath = ''
  if (index === tags.value.length - 1) {
    if (index !== 0) {
      routePath = tags.value[index - 1].path
        ? tags.value[index - 1].path
        : tags.value[index].path
    } else {
      routePath = tags.value[index].path
      return
    }
  } else if (tags.value.length !== 1) {
    routePath = tags.value[index + 1].path
    console.log(routePath)
  }
  store.dispatch('tagsview/delTag', index)
}

// watch(
//   () => route.matched,
//   (newVal) => {
//     console.log(newVal)
//   }
// )
</script>

<style scoped lang="scss">
.tags-container {
  height: 40px;
  border: 1px solid #eee;
  // background-color: pink;
  ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      text-align: center;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }
    .icon-close {
      // vertical-align: middle;
      display: inline-block;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      border-radius: 50%;
      margin-left: 5px;
    }
    .icon-close:hover {
      padding: 2px;
      transition: all 0.5s;
      color: #ffffff;
      background-color: #c0c4cc;
    }
    .active {
      color: #409eff;
      border-bottom: 1px solid #fff;
    }
    // .active:hover {
    //   display: block;
    // }
  }
}
</style>
