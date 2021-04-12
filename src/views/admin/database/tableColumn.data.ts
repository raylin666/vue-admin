import { BasicColumn } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '字段名称',
    dataIndex: 'Field',
    width: 200,
    fixed: 'left',
  },
  {
    title: '字段类型',
    dataIndex: 'Type',
    width: 200,
  },
  {
    title: '允许NULL',
    dataIndex: 'Null',
    width: 100,
  },
  {
    title: '默认值',
    dataIndex: 'Default',
    width: 220,
  },
  {
    title: '键',
    dataIndex: 'Key',
    width: 100,
  },
  {
    title: '额外属性',
    dataIndex: 'Extra',
    width: 350,
  },
  {
    title: '描述',
    dataIndex: 'Comment',
    width: 350,
  },
  {
    title: '字符集',
    dataIndex: 'Collation',
    width: 160,
  },
  {
    title: '权限',
    dataIndex: 'Privileges',
    width: 260,
  },
];
