import home from '../../home'
export default {
  path: '/sys',
  name: 'sys:user:list',
  meta: {
    title: '系统管理',
    icon: 'el-icon-operation'
  },
  component: home,
  children: [
    {
      path: '/sys/users',
      meta: {
        title: '用户管理',
        icon: 'el-icon-operation'
      },
      component: () => import('../../views/users')
    }
  ]
}
