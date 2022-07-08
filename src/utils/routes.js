
// 获取所有的二级路由数据
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach(item => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  return result
}

//  获取所有的一级数据
export const filterRouter = (routes) => {
  // routes 所有路由
  const childrenRoutes = getChildrenRoutes(routes)
  // routes 完整的路由 16 数据
  return routes.filter(route => {
    // find查找  path有没有不同的
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
  })
}

// 检测空对象 以及  检测空数据 如果为空返回true
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

// 将所有的一级路由数据处理成菜单数据
export const generateMenus = (routes) => {
  const result = []
  routes.forEach(item => {
    if (isNull(item.meta) && isNull(item.children)) return
    // console.log(item)
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    const routePath = item.path
    let route = result.find(route => route.path === routePath)
    // console.log(route, 'route')
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...generateMenus(item.children))
    }
  })
  return result
}
