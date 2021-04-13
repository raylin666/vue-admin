import { BasicColumn } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 140,
    fixed: 'left',
  },
  {
    title: 'IP 地址',
    dataIndex: 'ip',
    width: 120,
  },
  {
    title: '用户ID',
    dataIndex: 'uid',
    width: 160,
  },
  {
    title: '用户名',
    dataIndex: 'real_username',
    width: 120,
  },
  {
    title: '操作时间',
    dataIndex: 'created_at',
    width: 180,
  },
  {
    title: '执行时长 /秒',
    dataIndex: 'duration',
    width: 120,
    customRender: ({ record }) => {
      const color = record.duration > 1 ? 'red' : 'green';
      return h(Tag, { color: color }, () => record.duration);
    },
  },
  {
    title: '请求域名',
    dataIndex: 'host',
    width: 200,
    customRender: ({ record }) => {
      return record.host + ':' + record.port;
    },
  },
  {
    title: '请求方法',
    dataIndex: 'method',
    width: 100,
    customRender: ({ record }) => {
      return h(Tag, { color: 'green' }, () => record.method);
    },
  },
  {
    title: '请求路径',
    dataIndex: 'path',
    width: 400,
  },
  {
    title: '请求参数',
    dataIndex: 'params',
    width: 400,
  },
  {
    title: '操作方法',
    dataIndex: 'operation_method',
    width: 400,
  },
  {
    title: '操作描述',
    dataIndex: 'operation_description',
    width: 240,
  },
];
