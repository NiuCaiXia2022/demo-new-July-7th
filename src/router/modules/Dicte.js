import home from '../../home/index'

export default {
  path: '/tool',
  name: 'sys:dict:list',
  meta: {
    title: '系统管理',
    icon: 'el-icon-operation'
  },
  component: home,
  children: [
    {
      path: '/tool/dicts',
      name: '',
      meta: {
        title: '数字字典',
        icon: 'el-icon-operation'
      },
      component: () => import('../../views/users')
    }
  ]
}
