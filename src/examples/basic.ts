export const BasicDemo = {
  title: "基本用法",
  keywords: ["AutoTable", "Table", "表格", "基础", "使用", "用法"],
  description:
    "通过columns的属性来设置固宽列及非固宽列，固宽列为性别、年龄、出生日期、操作，非固定列为姓名、地址",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
  `,
  codes: 
    `import React from 'react';
    import AutoTable, { ColumnProps, ActionGroup } from 'src/components/AutoTable';

    const BasicDemo = () => {
      const columns: ColumnProps<any>[] = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        weights: 1,
        render: text => <a>{text}</a>,
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        range: ['男', '女'],
        render: text => (text === 0 ? '男' : '女'),
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        length: 5,
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        weights: 2,
      },
      {
        title: '出生日期',
        key: 'birthday',
        dataIndex: 'birthday',
        time: 'YYYY-MM-DD',
      }
      
      const data = [
        {
          key: "1",
          name: "张三",
          gender: 0,
          age: 32,
          address: "浙江省杭州市余杭区五常街道幸福小区3幢1单元202室",
          birthday: "1991-03-04",
        },
        {
          key: "2",
          name: "李四",
          gender: 1,
          age: 19,
          address: "浙江省杭州市余杭区五常街道幸福小区5幢2单元301室",
          birthday: "2004-01-26",
        },
        {
          key: "3",
          name: "王五",
          gender: 0,
          age: 26,
          address: "浙江省杭州市余杭区五常街道幸福小区7幢3单元503室",
          birthday: "1997-10-17",
        },
      ]
        
      return <AutoTable rowKey="key" columns={columns} dataSource={data} />
    }`,
};
