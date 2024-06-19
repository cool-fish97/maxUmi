/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-04-17 14:24:06
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-06-18 14:27:21
 * @FilePath: \maxUmi\src\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'Cool-FishのUmi Max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    menuHeaderRender:false,
    actionsRender:()=>{}
  };
};
