// // 路由鉴权
import router from './router'
import store from './store'

// router.beforeEach(async (to, from, next) => {
//   const token = store.getters.token
//   if (!token) {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     const userinfo = store.getters.userinfo
//     if (!userinfo) {
//       const res = await store.dispatch('user/getUserInfo')
//       console.log(res, '用户信息123')
//     } else {
//       console.log(123)
//     }
//   }
// })

// // router.beforeEach(async (to, from, next) => {
// //   const token = store.getters.token
// //   // console.log(token)
// //   if (!token) {
// //     if (to.path === '/login') {
// //       next()
// //     } else {
// //       next('/login')
// //     }
// //   } else {
// //     const userinfo = store.getters.userinfo
// //     // 判断用户信息不存在
// //     if (!userinfo) {
// //       // 这里请求 用户接口
// //       const response = await store.dispatch('user/getUserInfo')
// //       // console.log('这里请求', response)
// //       // 用户信息存在
// //       if (response) {
// //         // 请求 菜单数据
// //         const menu = store.getters.menu
// //         // console.log('res', res)
// //         // 判断菜单存在
// //         if (menu) {
// //           next()
// //         } else {
// //           await store.dispatch('user/getMenu')
// //           next()
// //         }
// //       } else {
// //         next()
// //       }
// //     } else {
// //       next('/login')
// //     }
// //   }
// // })

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (!token) {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    const userinfo = store.getters.userinfo
    if (!userinfo) {
      const response = await store.dispatch('user/getUserInfo')
      if (response) {
        const menu = store.getters.menu
        if (menu) {
          next()
        } else {
          await store.dispatch('user/getMenu')
          next()
        }
      } else {
        next('/login')
      }
    }
  }
})
