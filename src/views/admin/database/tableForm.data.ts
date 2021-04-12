import { BasicColumn } from '/@/components/Table';
import { bytesToSize } from '/@/utils/helper/basicHelper';

export const columns: BasicColumn[] = [
  {
    title: '表名',
    dataIndex: 'Name',
    width: 250,
    fixed: 'left',
  },
  {
    title: '数据库',
    dataIndex: 'Database',
    width: 100,
  },
  {
    title: '表存储引擎',
    dataIndex: 'Engine',
    width: 120,
  },
  {
    title: '表行数',
    dataIndex: 'Rows',
    width: 120,
  },
  {
    title: '表数据量',
    dataIndex: 'Data_length',
    width: 120,
    customRender: ({ record }) => {
      return bytesToSize(record.Data_length);
    },
  },
  {
    title: '索引空间',
    dataIndex: 'Index_length',
    width: 120,
    customRender: ({ record }) => {
      return bytesToSize(record.Index_length);
    },
  },
  {
    title: '行格式',
    dataIndex: 'Row_format',
    width: 80,
  },
  {
    title: '下个自增值',
    dataIndex: 'Auto_increment',
    width: 120,
  },
  {
    title: '字符集',
    dataIndex: 'Collation',
    width: 160,
  },
  {
    title: '表创建时间',
    dataIndex: 'Create_time',
    width: 180,
  },
  {
    title: '表更新时间',
    dataIndex: 'Update_time',
    width: 180,
    customRender: ({ record }) => {
      return record.Update_time ? record.Update_time : '暂无';
    },
  },
  {
    title: '版本',
    dataIndex: 'Version',
    width: 70,
  },
];
