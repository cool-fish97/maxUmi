/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-06-19 16:06:07
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-07-11 09:23:19
 * @FilePath: \maxUmi\src\pages\MyThree\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE·1    
 */
import React, { useEffect } from 'react';
import * as THREE from 'three';
// import styles from './index.less'
const MyThree: React.FC = () => {
  // 创建一个场景
  const scene = new THREE.Scene();
  // 创建一个相机
  const width = 800;
  const height = 500;
  const camera = new THREE.PerspectiveCamera(
    // 视角角度
    45,
    // 物体宽高比
    800 / 500,
    // 近平面距离
    0.1,
    // 远平面距离
    1000,
  );
  // 创建渲染器对象
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
  // 创建几何体
  const geometry = new THREE.BoxGeometry(100, 100, 100);
  // 创建物体外观材质
  //创建一个材质对象Material
  const material = new THREE.MeshBasicMaterial({
    color: 'purple', //设置材质颜色
  });
  // 两个参数分别为几何体geometry、材质material
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh（视角中的物体）
  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  mesh.position.set(0, 10, 0);
  scene.add(mesh);
  // 设置相机在三维坐标中的位置,即xyz轴
  camera.position.set(200, 200, 200);
  // 相机观察目标指向threejs 3d空间中的位置（镜头对准的目标）
  // 镜头默认指向原点
  camera.lookAt(mesh.position);
  renderer.render(scene, camera);
  // 渲染函数
  const animateRender = () => {
    requestAnimationFrame(animateRender);
    mesh.rotation.x += 0.05;
    mesh.rotation.y += 0.05;
    mesh.rotation.z += 0.05;
    renderer.render(scene, camera);
  };
  useEffect(() => {
    document.getElementById('webgl').appendChild(renderer.domElement);
    animateRender();
  }, []);
  return <div id="webgl"></div>;
};
export default MyThree;
