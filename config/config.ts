/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-04-26 10:20:01
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-04-26 14:45:33
 * @FilePath: \maxUmi\src\config\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'umi';
import { routes } from './route';
export default defineConfig({
  layout: {
    title: 'UMI MAX(Cool-Fish07)',
    locale: true,
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes
});
