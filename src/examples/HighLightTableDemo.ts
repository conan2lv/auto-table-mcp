export const HighLightTableDemo = {
  title: "新增行/编辑行/呼出抽屉等高亮目标行",
  keywords: ['高亮', 'highLight', '新增', '编辑', '方法', '行'],
  description:
    "当表格进行一些操作时，需要高亮目标行3s，使用<code>highLightTableRows</code>方法通过传入rowKeys来高亮目标行",
  tips: `
    1. 任何时候, AutoTable组件必须包含三个属性, columns, dataSource, rowKey
    2. 当定义columns时, 需要从src/components/AutoTable引入ColumnProps来做ts定义
    3. 当有一列为操作时, 需要从src/components/AutoTable中引入ActionGroup组件来处理
    4. 查询AutoTable文档获取highLightTableRows的入参信息和使用方法
    5. 使用highLightTableRows方法需要给AutoTable绑定ref
    6. 因为highLightTableRows方法需要操作dom, 在异步场景下需要用setTimeout包裹才能获取最新dom
  `,
  codes: 
    `import React, { memo, useRef, useState, useEffect } from 'react';
    import { Button, DatePicker, Form, Input, Modal, Select } from 'DPAntd';
    import moment from 'moment';
    import AutoTable, { ColumnProps, ActionGroup } from 'src/components/AutoTable';
    import FormItem from 'src/components/FormItem';

    const getAgeByBirthday = birthday => {
      const ageDifMs = Date.now() - new Date(birthday).getTime();
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const data = [
      {
        key: 'xxx',
        name: '张三',
        gender: 0,
        age: getAgeByBirthday('1991-03-04'),
        address: '浙江省杭州市余杭区五常街道xxxxxxxxxxx小区3幢1单元202室',
        birthday: '1991-03-04',
      },
      {
        key: '2',
        name: '李四',
        gender: 1,
        age: getAgeByBirthday('2004-01-26'),
        address: '浙江省杭州市余杭区五常街道xx小区5幢2单元301室',
        birthday: '2004-01-26',
      },
      {
        key: '3',
        name: '王五',
        gender: 0,
        age: getAgeByBirthday('1997-10-17'),
        address: '浙江省杭州市余杭区五常街道xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx小区7幢3单元503室',
        birthday: '1997-10-17',
      },
    ];

    const Demo = memo(() => {
      const tableRef = useRef(null);
      const [form] = Form.useForm();
      const [dataSource, setDataSource] = useState(data);
      const [modalVisible, setModalVisible] = useState(false);
      const [currentRecord, setCurrentRecord] = useState(null);

      useEffect(() => {
        form.resetFields();
      }, [currentRecord])

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
                  onClick: () => handleEditRow(record),
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

      // 新增一行
      const handleAddRow = () => {
        setCurrentRecord(null);
        setModalVisible(true);
      };

      // 编辑行
      const handleEditRow = record => {
        setCurrentRecord(record);
        setModalVisible(true);
      };

      const handleOk = () => {
        form.validateFields().then(values => {
          let res = [];
          const birthday = moment(values.birthday).format('YYYY-MM-DD');
          if (currentRecord) {
            res = dataSource.map(item => {
              if (item.key === currentRecord.key) {
                return {
                  ...item,
                  ...values,
                  birthday,
                  age: getAgeByBirthday(birthday),
                };
              }

              return item;
            });
          } else {
            res = dataSource.concat({
              key: String(dataSource.length + 1),
              ...values,
              birthday,
              age: getAgeByBirthday(birthday),
            });
          }

          // 模拟接口的异步场景
          setTimeout(() => {
            setDataSource(res);
            setModalVisible(false);
            tableRef.current?.highLightTableRows([currentRecord ? currentRecord.key : String(dataSource.length + 1)]);
          }, 300)
        });
      };

      return (
        <div>
          <Button style={{ marginBottom: '10px' }} type="primary" onClick={handleAddRow}>
            新增一行
          </Button>
          <AutoTable ref={tableRef} rowKey="key" columns={columns} dataSource={dataSource} />
          <Modal
            title={currentRecord ? '编辑一行' : '新增一行'}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            onOk={handleOk}
          >
            <Form
              form={form}
              colon={false}
              initialValues={{
                ...currentRecord,
                birthday: moment(currentRecord?.birthday),
              }}
            >
              <FormItem name="name" label="姓名" labelWidth={80} rules={[{ required: true }]}>
                <Input placeholder="请输入姓名" />
              </FormItem>
              <FormItem name="gender" label="性别" labelWidth={80} rules={[{ required: true }]}>
                <Select placeholder="请选择性别">
                  <Select.Option value={0}>男</Select.Option>
                  <Select.Option value={1}>女</Select.Option>
                </Select>
              </FormItem>
              <FormItem name="birthday" label="生日" labelWidth={80}>
                <DatePicker placeholder="请选择出生日期" />
              </FormItem>
              <FormItem name="address" label="地址" labelWidth={80}>
                <Input.TextArea placeholder="请输入地址" />
              </FormItem>
            </Form>
          </Modal>
        </div>
      );
    });

    export default Demo`,
};
