export const VirtualTableDemo = {
  title: "虚拟滚动",
  keywords: ["虚拟列表", "虚拟滚动", "virtual"],
  description: "设置 isVirtual 属性开启此功能",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 设置isVirtual为true时, 需要设置isFixedHeader为true或者scroll.y属性, 否则会出现样式问题
  `,
  codes: `import React, { memo } from 'react';
import AutoTable, { ColumnProps, ActionGroup } from 'src/components/AutoTable';

const Demo = memo(() => {
  const columns: ColumnProps<any>[] = [
    {
      title: '序号',
      dataIndex: 'order',
      key: 'order',
      length: 2,
    },
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
    {
      title: '操作',
      key: 'action',
      iconNumber: 2,
      render: (_, record) => (
        <ActionGroup
          actions={[
            {
              title: '编辑',
              icon: 'icon-edit',
            },
            {
              title: '删除',
              icon: 'icon-delete',
            },
          ]}
        />
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      key: i,
      order: i,
      name: \`张三\${i}号\`,
      gender: 0,
      age: 32,
      address: \`浙江省杭州市余杭区五常街道xx小区3幢1单元\${i}室\`,
      birthday: '1991-03-04',
    });
  }

  return <AutoTable rowKey="key" columns={columns} dataSource={data} isVirtual={true} isFixedHeader={true} />;
});

export default Demo;`,
};
