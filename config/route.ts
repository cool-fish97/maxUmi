/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-04-26 14:12:29
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-04-28 15:09:04
 * @FilePath: \maxUmi\config\route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      // 隐藏自己的菜单和子菜单
      hideInMenu:true
    },
    {
      name: ' CRUD',
      path: '/table',
      component: './Table',
    },
  ]