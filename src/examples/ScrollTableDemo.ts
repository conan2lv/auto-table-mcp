export const ScrollTableDemo = {
  title: "手动设置表格滚动位置",
  keywords: ['滚动', 'scroll', '位置', '方法', '手动设置'],
  description: "AutoTable提供 scrollTo 和 scrollToItem 方法，可以手动设置表格滚动位置",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 查询AutoTable文档获取scrollTo和scrollToItem的入参信息和使用方法
    5. 使用scrollTo和scrollToItem方法需要给AutoTable绑定ref
    6. 因为scrollTo和scrollToItem方法需要操作dom, 在异步场景下需要用setTimeout包裹才能获取最新dom
  `,
  codes: 
    `import React, { memo, useState } from 'react';
import { Radio, Space, Button, InputNumber, Divider } from 'DPAntd';
import AutoTable, { ColumnProps, ActionGroup } from 'src/components/AutoTable';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: \`张三\${i + 1}号\`,
    gender: 0,
    age: 32,
    address: \`浙江省杭州市余杭区五常街道xx小区3幢1单元\${i + 1}室\`,
    birthday: '1991-03-04',
  });
}

const Demo = memo(() => {
  const tableRef = AutoTable.useTable();
  const [scrollDir, setScrollDir] = useState('vertical');
  const [scrollNumber, setScrollNumber] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollAlign, setScrollAlign] = useState('auto');
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
    {
      title: '列1',
      key: '1',
      dataIndex: '1',
    },
    {
      title: '列2',
      key: '2',
      dataIndex: '2',
    },
    {
      title: '列3',
      key: '3',
      dataIndex: '3',
      weights: 2,
    },
    {
      title: '列4',
      key: '4',
      dataIndex: '4',
    },
    {
      title: '列5',
      key: '5',
      dataIndex: '5',
      weights: 2,
    },
    {
      title: '列6',
      key: '6',
      dataIndex: '6',
    },
    {
      title: '列7',
      key: '7',
      dataIndex: '7',
      weights: 2,
    },
    {
      title: '列8',
      key: '8',
      dataIndex: '8',
    },
    {
      title: '列9',
      key: '9',
      dataIndex: '9',
      weights: 2,
    },
    {
      title: '列10',
      key: '10',
      dataIndex: '10',
    },
    {
      title: '操作',
      key: 'action',
      iconNumber: 3,
      render: (_, record) => (
        <ActionGroup
          tileLimit={2}
          actions={[
            {
              title: '新建',
              icon: 'icon-xinjian2',
            },
            {
              title: '编辑',
              icon: 'icon-edit',
            },
            {
              title: '删除',
              icon: 'icon-delete',
              rules: [
                {
                  validate: () => false,
                },
              ],
            },
            {
              title: '查看详情',
              icon: 'icon-chakanxiangqing1',
            },
          ]}
        />
      ),
    },
  ];

  const handleScroll = () => {
    tableRef.current?.scrollTo(scrollNumber, scrollDir as "vertical" | "horizontal");
  }

  const handleScrollItem = () => {
    tableRef.current?.scrollToItem(scrollIndex, scrollAlign as "center" | "auto" | "smart" | "end" | "start");
  }

  return (
    <div>
      <Divider orientation="left">滚动到指定距离</Divider>
      <Space style={{ marginBottom: '10px' }}>
        <span>轴方向</span>
        <Radio.Group value={scrollDir} onChange={e => setScrollDir(e.target.value)}>
          <Radio value="vertical">y轴</Radio>
          <Radio value="horizontal">x轴</Radio>
        </Radio.Group>
      </Space>
      <Space style={{ marginBottom: '10px' }}>
        <span>滚动到</span>
        <InputNumber value={scrollNumber} onChange={setScrollNumber} />
        <Button type="primary" onClick={handleScroll}>确定</Button>
      </Space>
      <Divider orientation="left">滚动到指定行数</Divider>
      <Space style={{ display: 'flex', marginBottom: '10px' }}>
        <span>对齐策略</span>
        <Radio.Group value={scrollAlign} onChange={e => setScrollAlign(e.target.value)}>
          <Radio value="auto">auto</Radio>
          <Radio value="smart">smart</Radio>
          <Radio value="start">start</Radio>
          <Radio value="center">center</Radio>
          <Radio value="end">end</Radio>
        </Radio.Group>
      </Space>
      <Space style={{ display: 'flex', marginBottom: '10px' }}>
        <span>滚动至第</span>
        <InputNumber value={scrollIndex} onChange={setScrollIndex} />
        <span>{scrollDir === 'horizontal' ? '列' : '行'}</span>
        <Button type="primary" onClick={handleScrollItem}>确定</Button>
      </Space>
      <AutoTable ref={tableRef} rowKey="key" columns={columns} dataSource={data} scroll={{ y: 500 }} />
    </div>
  );
});

export default Demo;`,
};