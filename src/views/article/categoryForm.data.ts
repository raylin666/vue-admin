import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 240,
  },
  {
    title: '父级ID',
    width: 120,
    dataIndex: 'pid',
    customRender: ({record}) => {
      const isParent = ~~record.pid === 0;
      if (isParent) {
        return h(Tag, {color: 'green'}, () => '父级分类');
      }

      return h(Tag, {color: 'green'}, () => '子分类: ' + record.pid)
    }
  },
  {
    title: '排序',
    width: 120,
    dataIndex: 'sort',
  },
  {
    title: '状态',
    width: 160,
    dataIndex: 'status',
    edit: true,
    editable: true,
    editComponent: 'Switch',
    editValueMap: (value) => {
      return value ? '开启' : '关闭';
    },
  },
  {
    title: '文章数量',
    width: 120,
    dataIndex: 'article_count',
    customRender: () => {
      return 0;
    }
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '分类名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'pid',
    label: '分类父级ID',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
    dynamicDisabled: true,
  },
  {
    field: 'sort',
    label: '分类排序',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
  },
  {
    field: 'status',
    label: '是否启用',
    component: 'Switch',
    defaultValue: false,
  },
];

export const updateFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '分类名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'pid',
    label: '分类父级ID',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
    dynamicDisabled: true,
  },
  {
    field: 'sort',
    label: '分类排序',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
  },
];
