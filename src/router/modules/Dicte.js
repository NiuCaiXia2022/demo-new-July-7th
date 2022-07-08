import home from '../../home'

export default {
  path: '/tool',
  name: 'sys:dict:list',
  redirect: '/tool/dicts',
  meta: {
    title: '系统工具',
    icon: 'el-icon-operation'
  },
  component: home,
  children: [
    {
      path: '/tool/dicts',
      meta: {
        title: '数字字典',
        icon: 'el-icon-operation'
      },
      component: () => import('../../views/dicts')
    }
  ]
}
