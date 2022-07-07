// 接口封装
import http from '../utils/request'

// 验证码
const getCaptcha = () => {
  return http({
    url: '/captcha',
    method: 'GET'
  })
}

// 登录
const getLogin = (data) => {
  return http({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

// 菜单
const getMenu = () => {
  return http({
    url: '/sys/menu/nav',
    method: 'GET'
  })
}

// 用户
const getUserInfo = () => {
  return http({
    url: '/sys/userInfo',
    method: 'GET'
  })
}

// 退出
const getLogout = () => {
  return http({
    url: '/logout',
    method: 'POST'
  })
}

export default {
  getCaptcha,
  getLogin,
  getMenu,
  getUserInfo,
  getLogout
}
