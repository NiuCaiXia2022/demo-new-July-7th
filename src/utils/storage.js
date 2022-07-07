// 封装本地
const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  } else {
    localStorage.setItem(key, value)
  }
}

const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const removeItem = (key) => {
  localStorage.removeItem(key)
}

export default {
  setItem,
  getItem,
  removeItem
}
