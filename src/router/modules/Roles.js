import home from '../../home'
export default {
  path: '/sys',
  name: 'sys:role:list',
  meta: {
    title: '系统管理',
    icon: 'el-icon-operation'
  },
  component: home,
  children: [
    {
      path: '/sys/roles',
      name: '',
      meta: {
        title: '角色管理',
        icon: 'el-icon-operation'
      },
      component: () => import('../../views/users')
    }
  ]
}
