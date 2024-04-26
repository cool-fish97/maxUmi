/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-04-17 14:24:06
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-04-26 14:57:22
 * @FilePath: \maxUmi\src\pages\Home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
// @ts-ignore
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
