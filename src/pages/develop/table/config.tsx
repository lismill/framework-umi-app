export default {
  title: '基础表格',
  search: {
    items: [
      {
        type: 'input',
        label: '账号名称',
        prop: 'input',
      },
      {
        type: 'input',
        label: '账号名称',
        prop: 'input',
      },
      {
        type: 'input',
        label: '账号名称',
        prop: 'input',
      },
      {
        type: 'input',
        label: '账号名称',
        prop: 'input',
      },
      {
        type: 'select',
        label: '下拉框',
        prop: 'select',
      },
    ],
    data: {
      status: '2',
    },
  },
  tabs: [
    { label: '全部', key: '1' },
    { label: '进行中', key: '2', total: 18669 },
    { label: '已完成', key: '3' },
  ],
  table: {
    dataSource: [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        slot: 666666,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 13,
        slot: 666666,
        address: '西湖区湖底公园1号',
      },
    ],
    columns: [
      {
        type: 'text',
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        type: 'text',
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        type: 'slot',
        title: '自定义',
        dataIndex: 'slot',
        key: 'slot',
        render: (_: any, record: any) => <div>* {record.slot} *</div>,
      },
      {
        type: 'text',
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        type: 'operate',
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        values: [
          { title: '查看', key: '查看', if: (record: any) => record.name === '胡彦斌' },
          { title: '删除', key: '删除', if: (record: any) => record.name === '胡彦斌' },
        ],
      },
    ],
  },
};
