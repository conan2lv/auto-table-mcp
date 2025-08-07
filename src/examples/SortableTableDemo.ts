export const SortableTableDemo = {
  title: "非虚拟列表下拖拽表格，不支持树型结构拖拽",
  keywords: ['拖拽', '排序', 'sort'],
  description: "设置 isSortable 属性开启此功能，设置 sortableOptions 进行配置和监听拖拽事件",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 只有AutoTable的isVirtual为false或未配置isVirtual属性时, 才会使用此示例
    5. 需要给AutoTable设置isSortable为true,
    6. 需要给AutoTable的sortableOptions属性中配置onEnd方法, 否则拖拽排序结果不生效,
  `,
  codes: 
    `import React from 'react';
import AutoTable, { ColumnProps, ActionGroup } from 'src/components/AutoTable';

const TestTable = () => {
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
  for (let i = 0; i < 10; i++) {
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

  return <AutoTable rowKey="key" columns={columns} dataSource={data} isSortable={true} />;
};

export default TestTable;`,
};