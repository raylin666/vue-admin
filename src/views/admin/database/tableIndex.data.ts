import { BasicColumn } from '/@/components/Table';

export const columnsIndex: BasicColumn[] = [
  {
    title: '表名',
    dataIndex: 'Table',
    width: 250,
    fixed: 'left',
  },
  {
    title: '索引名',
    dataIndex: 'Key_name',
    width: 200,
  },
  {
    title: '字段名',
    dataIndex: 'Column_name',
    width: 180,
  },
  {
    title: '索引类型',
    dataIndex: 'Index_type',
    width: 140,
  },
  {
    title: '是否唯一索引',
    dataIndex: 'Non_unique',
    width: 120,
    customRender: ({ record }) => {
      return record.Non_unique ? '否' : '是';
    },
  },
  {
    title: '索引描述',
    dataIndex: 'Index_comment',
    width: 260,
  },
  {
    title: '排序规则',
    dataIndex: 'Collation',
    width: 120,
  },
  {
    title: '索引序列号',
    dataIndex: 'Seq_in_index',
    width: 120,
  },
  {
    title: '基数',
    dataIndex: 'Cardinality',
    width: 160,
  },
];
