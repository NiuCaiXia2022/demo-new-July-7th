
// 去 筛选的menu 数据的空children
const generateMenu = (menu) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children && menu[i].children.length <= 0) {
      delete menu[i].children
    }
    if (menu[i].children && menu[i].children.length > 0) {
      generateMenu(menu[i].children)
    }
  }
  return menu
}

// 导出
export const filterMenuData = (menu) => {
  const menuList = generateMenu(menu)
  return menuList
}
