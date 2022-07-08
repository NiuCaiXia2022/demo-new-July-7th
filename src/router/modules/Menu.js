import home from '../../home'
export default {
  path: '/sys',
  name: 'sys:menu:list',
  redirect: '/sys/users',
  meta: {
    title: '系统管理',
    icon: 'el-icon-operation'
  },
  component: home,
  children: [
    {
      path: '/sys/menus',
      name: '',
      meta: {
        title: '菜单管理',
        icon: 'el-icon-operation'
      },
      component: () => import('../../views/menus')
    }
  ]
}
