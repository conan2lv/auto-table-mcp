export const ShrinkableTableDemo = {
  title: "可伸缩表格",
  keywords: ["收起", "展开", "伸缩", "expand", "shrink"],
  description:
    "当表格需要点击展开子页面时可以用此ShrinkableTable组件控制Table宽度变化",
  tips: `
    1. 任何时候, ShrinkableTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
		4. 使用分组表格时, 需要从src/components/ShrinkableTable引入ShrinkableTable, ShrinkableTable适用AutoTable组件的通用能力
		5. ShrinkableTable的children属性就是展开后子页面渲染内容
		6. ShrinkableTable通过status属性判断当前展开/收起状态, 通过onShrinkStatusChange属性响应内部状态变化的回调
  `,
  demo: `
    import React, { memo, useState } from 'react';
import ShrinkableTable, { ShrinkStatus, SELECT_ROW_CLASS_NAME } from 'src/components/ShrinkableTable';
import { ColumnProps } from 'src/components/AutoTable';

const Demo = memo(() => {
  const [status, setStatus] = useState(ShrinkStatus.EXPAND);
  const [currentData, setCurrentData] = useState(null);

  const columns: ColumnProps<any>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      weights: 1,
      render: (text, record) => <a onClick={() => handleClick(record)}>{text}</a>,
      show: true,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      range: ['男', '女'],
      render: text => (text === 0 ? '男' : '女'),
      show: status === ShrinkStatus.EXPAND,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      length: 5,
      show: status === ShrinkStatus.EXPAND,
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      weights: 2,
      show: status === ShrinkStatus.EXPAND,
    },
    {
      title: '出生日期',
      key: 'birthday',
      dataIndex: 'birthday',
      time: 'YYYY-MM-DD',
      show: status === ShrinkStatus.EXPAND,
    },
  ].filter(item => item.show);

  const data = [
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
    {
      key: '4',
      name: '老六',
      gender: 0,
      age: 26,
      address: '浙江省杭州市余杭区五常街道幸福小区7幢3单元503室',
      birthday: '1997-10-17',
    },
    {
      key: '5',
      name: '赵七',
      gender: 0,
      age: 26,
      address: '浙江省杭州市余杭区五常街道幸福小区7幢3单元503室',
      birthday: '1997-10-17',
    },
  ];

  const handleClick = record => {
    setStatus(ShrinkStatus.SHRINK);
    setCurrentData(record);
  };

  return (
    <ShrinkableTable
      rowKey="key"
      status={status}
      onShrinkStatusChange={s => setStatus(s)}
      columns={columns}
      dataSource={data}
      rowClassName={record => (currentData?.key === record.key ? SELECT_ROW_CLASS_NAME : '')}
    >
      <div style={{ padding: '20px' }}>
        <h1>{currentData?.name}</h1>
      </div>
    </ShrinkableTable>
  );
});
    `,
};
