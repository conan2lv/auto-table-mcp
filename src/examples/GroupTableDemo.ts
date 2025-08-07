export const GroupTableDemo = {
  title: "分组表格",
  keywords: ['分组', 'group', '分类', '分隔'],
  description: "将数据分为若干组，给每个组配置属性传入GroupTable",
	tips: `
    1. 任何时候, GroupTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
		4. 使用分组表格时, 需要从src/components/GroupTable引入GroupTable, GroupTable适用AutoTable组件的通用能力
		5. GroupTable的dataSource每一项数据必须包含key, title, data属性
  `,
  demo: `
        import React, { memo } from 'react';
import GroupTable, { TagColor } from 'src/components/GroupTable';
import { ColumnProps } from 'src/components/AutoTable';

const Demo = memo(() => {
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
    },
  ];

  const data = [
    {
      key: '1',
      title: '家人',
      tagColor: TagColor.Blue,
      data: [
        {
          key: '1',
          name: '张三',
          gender: 0,
          age: 32,
          address: '浙江省杭州市余杭区五常街道幸福小区3幢1单元202室',
          birthday: '1991-03-04',
        },
        {
          key: '2',
          name: '李四',
          gender: 1,
          age: 19,
          address: '浙江省杭州市余杭区五常街道幸福小区5幢2单元301室',
          birthday: '2004-01-26',
        },
        {
          key: '3',
          name: '王五',
          gender: 0,
          age: 26,
          address: '浙江省杭州市余杭区五常街道幸福小区7幢3单元503室',
          birthday: '1997-10-17',
        },
      ],
    },
    {
      key: '2',
      title: '朋友',
      tagColor: TagColor.Green,
      data: [
        {
          key: '4',
          name: '张三',
          gender: 0,
          age: 32,
          address: '浙江省杭州市余杭区五常街道幸福小区3幢1单元202室',
          birthday: '1991-03-04',
        },
        {
          key: '5',
          name: '李四',
          gender: 1,
          age: 19,
          address: '浙江省杭州市余杭区五常街道幸福小区5幢2单元301室',
          birthday: '2004-01-26',
        },
        {
          key: '6',
          name: '王五',
          gender: 0,
          age: 26,
          address: '浙江省杭州市余杭区五常街道幸福小区7幢3单元503室',
          birthday: '1997-10-17',
        },
      ],
    },
    {
      key: '3',
      title: '同事',
      tagColor: TagColor.Yellow,
      data: [
        {
          key: '7',
          name: '张三',
          gender: 0,
          age: 32,
          address: '浙江省杭州市余杭区五常街道幸福小区3幢1单元202室',
          birthday: '1991-03-04',
        },
        {
          key: '8',
          name: '李四',
          gender: 1,
          age: 19,
          address: '浙江省杭州市余杭区五常街道幸福小区5幢2单元301室',
          birthday: '2004-01-26',
        },
        {
          key: '9',
          name: '王五',
          gender: 0,
          age: 26,
          address: '浙江省杭州市余杭区五常街道幸福小区7幢3单元503室',
          birthday: '1997-10-17',
        },
      ],
    },
  ];

  return <GroupTable rowKey="key" columns={columns} dataSource={data} />;
});
    `,
};
