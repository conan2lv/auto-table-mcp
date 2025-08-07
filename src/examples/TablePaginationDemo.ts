export const TablePaginationDemo = {
  title: "分页与批量操作",
  keywords: ['分页', '批量', '操作', '勾选', 'pagination', 'page', 'pageSize', 'actions', 'batch', 'selectedRowKeys', 'rowSelection'],
  description: "AutoTable内置了两个配套组件**吸底分页器** Pagination 和**表格批量操作** TableBatchAction，两个独立组件可单独使用，也可以在 isFixedHeader 属性为true时，在AutoTable中使用 pagination 和 batchActions 两个属性配置",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 使用batchActions属性配置表格批量操作需要先配置rowSelection
    5. 在rowSelection中使用onSelectRow而非onChange和onSelect
    6. 如果不希望batchActions的actions过多引起样式问题, 可以通过设置useAutoLayoutActions和actionLimitCount限制actions最大展示
    7. 如果配置了pagination属性, 则必须包含current, total, onChange三个属性
  `,
  codes: 
    `import React, { memo, useState, useEffect } from 'react';
import ActionGroup from 'src/components/ActionGroup';
import AutoTable, { ColumnProps } from 'src/components/AutoTable';

const data = new Array(100).fill(0).map((item, index) => ({
  key: String(index),
  name: \`张三\${index}\`,
  gender: 0,
  age: 32,
  address: \`浙江省杭州市余杭区五常街道xx小区3幢1单元\${index}室\`,
  birthday: '1991-03-04',
}));

const Demo = memo(() => {
  const [originData, setOriginData] = useState(data);
  const [showData, setShowData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    setShowData(originData.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [originData, currentPage, pageSize]);

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
      iconNumber: 1,
      render: (_, record) => (
        <ActionGroup
          actions={[
            {
              title: '删除',
              icon: 'icon-delete',
              rules: [
                {
                  validate: () => Number(record.key) % 13 !== 0,
                  message: '13倍数的行禁用',
                },
              ],
              onClick: () => handleDelete(record.key),
            },
          ]}
        />
      ),
    },
  ];

  const handleDelete = (key: string) => {
    setOriginData(originData.filter(item => item.key !== key));
    setSelectedRowKeys(selectedRowKeys.filter(item => item !== key));
  };

  const handleBatchDelete = () => {
    setOriginData(originData.filter(item => !selectedRowKeys.includes(item.key)));
    setSelectedRowKeys([]);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleSelectAll = (checked: boolean, selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  return (
    <div style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <AutoTable
        rowKey="key"
        columns={columns}
        dataSource={showData}
        isFixedHeader
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          // 内置新方法在单个勾选/取消时直接返回当前所有的selectedRowKeys
          onSelectRow: setSelectedRowKeys,
          getCheckboxProps: record => ({
            disabled: Number(record.key) % 13 === 0,
          }),
        }}
        batchActions={{
          showCount: true,
          showTotal: true,
          onSelectAll: handleSelectAll,
          actions: [
            {
              icon: 'icon-delete',
              title: '删除',
              onClick: handleBatchDelete,
            },
          ],
        }}
        pagination={{
          total: originData.length,
          current: currentPage,
          pageSize: pageSize,
          showQuickJumper: true,
          showSizeChanger: true,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
});

export default Demo;`,
};