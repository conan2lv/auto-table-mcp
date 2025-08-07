export const NewSortableTableDemo = {
  title: "虚拟列表下拖拽表格，支持树型结构拖拽",
  keywords: ['虚拟列表', '虚拟表格', '拖拽', '排序', '树型', 'sort', 'virtual', 'tree'],
  description: "设置 isSortable 及 isVirtual 属性开启此功能，设置 sortableOptions 进行配置和监听拖拽事件",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 只有AutoTable的isVirtual为true时, 才会使用此示例
    5. 需要给AutoTable设置isSortable为true, isVirtual为true
    6. 需要给AutoTable的sortableOptions属性中配置onChange方法, 否则拖拽排序结果不生效
    7. 结合sortable-options-props的参数定义给出正确的sortableOptions配置
  `,
  codes: 
    `import React, { useState } from 'react';
import { InputNumber, Space, Switch } from 'DPAntd';
import AutoTable, { ColumnProps } from 'src/components/AutoTable';

const mockData = [
  {
    id: '1',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '2',
    name: '张三',
    desc: '测试测试测试',
    children: [
      {
        id: '2-1',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-2',
        name: '张三',
        desc: '测试测试测试',
        children: [
          {
            id: '2-2-1',
            name: '张三',
            desc: '测试测试测试',
          },
        ],
      },
      {
        id: '2-3',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-4',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-5',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-6',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-7',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-8',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '2-9',
        name: '张三',
        desc: '测试测试测试',
      },
    ],
  },
  {
    id: '3',
    name: '张三',
    desc: '测试测试测试',
    children: [
      {
        id: '3-1',
        name: '张三',
        desc: '测试测试测试',
      },
      {
        id: '3-2',
        name: '张三',
        desc: '测试测试测试',
        children: [
          {
            id: '3-2-1',
            name: '张三',
            desc: '测试测试测试',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '5',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '6',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '7',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '8',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '9',
    name: '张三',
    desc: '测试测试测试',
  },
  {
    id: '10',
    name: '张三',
    desc: '测试测试测试',
  },
];

const TestTable = () => {
  const [dataSource, setDataSource] = useState(mockData);
  const [showHandle, setShowHandle] = useState(true);
  const [hoverTime, setHoverTime] = useState(1000);
  const [allowLeafAsParent, setAllowLeafAsParent] = useState(true);
  const tableRef = AutoTable.useTable();

  const columns: ColumnProps<any>[] = [
    {
      dataIndex: 'id',
      title: '序号',
    },
    {
      dataIndex: 'name',
      title: '姓名',
    },
    {
      dataIndex: 'desc',
      title: '描述',
    },
  ];

  return (
    <Space size={12} direction="vertical">
      <Space size={12}>
        <span className="text-black">是否展示拖拽手柄</span>
        <Switch checked={showHandle} onChange={setShowHandle} />
        <span className="text-black">允许叶子节点作为父节点</span>
        <Switch checked={allowLeafAsParent} onChange={setAllowLeafAsParent} />
      </Space>
      <Space size={12}>
        <span className="text-black">悬停展开时间设置</span>
        <InputNumber min={0} step={100} value={hoverTime} onChange={setHoverTime} />
        <span className="text-black"> 毫秒</span>
      </Space>
      <AutoTable
        rowKey="id"
        ref={tableRef}
        columns={columns}
        dataSource={dataSource}
        isVirtual={true}
        isSortable={true}
        sortableOptions={{
          showHandle,
          hoverTime,
          allowLeafAsParent,
          onChange: newDataSource => {
            setDataSource(newDataSource);
          },
        }}
        scroll={{
          y: 600,
        }}
      />
    </Space>
  );
};

export default TestTable;`,
};