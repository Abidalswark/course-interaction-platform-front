import { RouterLink, type RouteRecordRaw } from 'vue-router'
import { MenuItem, SubMenu } from 'ant-design-vue'
import { modules } from '@/router/index'

export default function () {
  function handleChildren(item: RouteRecordRaw, path: string) {
    if(item.meta?.disabled){return}
    if (item.children) {
      return (
        // 二级菜单
        <SubMenu title={item.name}>
          {/* 判断当前是否有子路由，如有则递归调用handleChildren */}
          {item.children!.map((child) => handleChildren(child, `${path}/${child.path}`))}
        </SubMenu>
      )
    } else {
      return (
        // 一级菜单
        <MenuItem key={path} >
          <RouterLink to={path}>
            {item.name}
          </RouterLink>
        </MenuItem>
      )
    }
  }

  return modules.map((item) => handleChildren(item, `/user/${item.path}`))
}