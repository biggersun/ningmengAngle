export const phoneReg = /^1[34578]\d{9}$/

export const emailReg = /^[-\w.]+@([\w-]+\.)+[a-z]{2,3}$/

export const actionCreator = type => payload => ({ type, payload, })

export const matchSidebarItem = (key, path) => path === key || path.startsWith(`${key}/`)

