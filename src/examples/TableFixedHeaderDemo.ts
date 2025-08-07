export const TableFixedHeaderDemo = {
  title: "固定表头",
  keywords: ['固定', '表头', 'fixed', 'flex', '滚动', '列表页'],
  description: "设置 isFixedHeader 为true实现固定表头，需要Table的父组件是一个高度弹性的盒子",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 设置isFixedHeader属性为true固定表头
    5. 当isFixedHeader属性为true时, 给AutoTable的父元素设置类名auto-table-layout-container
    6. 在列表页中设置isFixedHeader为true, 在弹窗Modal、抽屉Drawer中无须设置isFixedHeader为true
  `,
  codes: 
    `import React, { memo } from 'react';
import AutoTable, { ColumnProps, ActionGroup } from 'src/components/AutoTable';

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
      line: 1,
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
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: \`张三\${i}号\`,
      gender: 0,
      age: 32,
      address: \`浙江省杭州市余杭区五常街道xx小区3幢1单元\${i}室\`,
      birthday: '1991-03-04',
    });
  }

  return (
    <div className="auto-table-layout-container">
      <h1>表格标题</h1>
      <AutoTable rowKey="key" columns={columns} dataSource={data} isFixedHeader={true} pagination={{ current: 1, pageSize: 10 }} />
    </div>
  );
});

export default Demo;`,
};