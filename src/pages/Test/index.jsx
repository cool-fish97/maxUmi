/*
 * @Author: lyhao coolyee07@163.com
 * @Date: 2024-06-20 16:05:56
 * @LastEditors: lyhao coolyee07@163.com
 * @LastEditTime: 2024-06-20 17:17:15
 * @FilePath: \maxUmi\src\pages\test\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Pagination, Table } from 'antd';
import React from 'react';
import styles from './index.less';
const tableData = [
  {
    key: '1',
    name: 'John Brown1',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green2',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black3',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User4',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'John Brown5',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    name: 'Jim Green6',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Joe Black7',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Disabled User8',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];
class Test extends React.Component {
  componentDidMount() {
    this.setState({
      dataSource: tableData.slice(0, 5),
    });
  }
  state = {
    pageSize: 5,
    pageNum: 1,
    dataSource: [],
  };

  handlePageChange = (page) => {
    console.log('♠️♣️♥️♦️ ~ Test ~ page:', page);
    // const { pageSize } = this.state;
    const startNum = (page - 1) * this.state.pageSize;
    const endNum = page * this.state.pageSize;
    const data =
      endNum > tableData.length
        ? tableData.slice(startNum, tableData.length)
        : tableData.slice(startNum, endNum);
    console.log('♠️♣️♥️♦️ ~ Test ~ data:', data);
    this.setState({
      pageNum: page,
      dataSource: data,
    });
  };
  render() {
    const { pageSize, pageNum, dataSource } = this.state;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    return (
      <div className={styles.container}>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
        <Pagination
          total={tableData.length}
          current={pageNum}
          onChange={this.handlePageChange}
          pageSize={pageSize}
        />
      </div>
    );
  }
}
export default Test;
