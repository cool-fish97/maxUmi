/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-04-17 14:24:06
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-04-28 14:27:12
 * @FilePath: \maxUmi\src\pages\Access\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
// @ts-ignore
import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
// @ts-ignore
import { Button, Modal } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import styles from './index.less';
const AccessPage: React.FC = () => {
  const access = useAccess();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleIsVisible = () => {
    setIsVisible(true);
  };
  const handleOk = () => {
    setIsVisible(false);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };
  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
      className={styles.container}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button onClick={handleIsVisible}>
          <i className={styles.icon}>试着点一下</i>
        </Button>
      </Access>
      <Modal
        open={isVisible}
        title="Umi Max权限详解"
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={
          <PoweroffOutlined />
        }
      >
        <p>
          umi max通过配置运行时配置app.ts来控制初始的name，当项目运行获取到的name与权限控制判断的name无权限名称相同时，则不显示该组件
        </p>
      </Modal>
    </PageContainer>
  );
};

export default AccessPage;
