import { FormSchema } from '/@/components/Form';
import { h, computed } from 'vue';
import { MarkDown } from '/@/components/Markdown';
import { userStore } from '/@/store/modules/user';

const getUserInfo = computed(() => {
    const { username = '', id } = userStore.getUserInfoState || {};
    return { username, id };
});

export const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '文章标题',
    componentProps: {
      placeholder: '请填写文章标题',
    },
    required: true,
  },
  {
    field: 'summary',
    component: 'InputTextArea',
    label: '文章摘要',
    componentProps: {
      placeholder: '请填写文章摘要',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'cover',
    component: 'Upload',
    label: '上传封面',
    required: true,
    slot: 'cover',
  },
  {
      field: 'content',
      component: 'Input',
      label: '文章内容详情',
      itemProps: {
        labelCol: {span: 3},
        wrapperCol: {span: 19, offset: 1},
      },
      defaultValue: '',
      rules: [{ required: true, trigger: 'blur' }],
      render: ({ model, field }) => {
        return h(MarkDown, {
          value: model[field],
          onChange: (value: string) => {
            model[field] = value;
          },
        });
      },
    },
  {
    field: 'sort',
    label: '分类排序',
    component: 'InputNumber',
    required: true,
    defaultValue: 0,
    colProps: {
        span: 9,
    },
    itemProps: {
        labelCol: {span: 4, offset: 4},
        wrapperCol: {span: 6, offset: 3, style: {marginLeft: "11%"}},
    }
  },
  {
    field: 'recommend_flag',
    component: 'RadioButtonGroup',
    label: '文章推荐标识',
    defaultValue: '0',
    componentProps: {
        options: [
            { label: '否', value: '0' },
            { label: '是', value: '1' },
        ],
    },
    required: true,
    colProps: {
        span: 9,
    },
    itemProps: {
        labelCol: {span: 5},
        wrapperCol: {span: 6, offset: 3},
    }
  },
  {
    field: 'comment_flag',
    component: 'RadioButtonGroup',
    label: '文章是否允许评论',
    defaultValue: '1',
    componentProps: {
        options: [
            { label: '否', value: '0' },
            { label: '是', value: '1' },
        ],
    },
    required: true,
    colProps: {
        span: 9,
    },
    itemProps: {
        labelCol: {span: 6, offset: 2},
        wrapperCol: {span: 6, offset: 3, style: {marginLeft: "11%"}},
    }
  },
  {
    field: 'status',
    label: '是否发布',
    component: 'Switch',
    defaultValue: false,
    rules: [
      {
        required: true,
        message: '请选择是否启用',
        type: 'boolean',
      },
    ],
    colProps: {
        span: 9,
    },
    itemProps: {
        labelCol: {span: 5},
        wrapperCol: {span: 6, offset: 3},
    }
  },
  {
    field: 'release_time',
    label: '发布时间',
    component: 'DatePicker',
    componentProps: {
        format: 'YYYY-MM-DD h:mm',
    },
  },
  {
    field: 'keyword',
    component: 'Select',
    label: '文章关键词',
    subLabel: '( 选填 )',
    slot: 'keyword',
  },
  {
    field: 'user_id',
    component: 'Input',
    label: '文章发布者ID',
    dynamicDisabled: true,
    defaultValue: getUserInfo.value.id
  },
  {
    field: 'publisher_username',
    component: 'Input',
    label: '文章发布者用户名',
    dynamicDisabled: true,
    defaultValue: getUserInfo.value.username
  },
  {
    field: 'author',
    component: 'Input',
    label: '文章作者',
    helpMessage: '用于前端展示',
    subLabel: '( 选填 )',
    componentProps: {
      placeholder: '请填写文章作者,默认为发布者名称',
    },
  },
  {
    field: 'source',
    component: 'Input',
    label: '文章来源',
    subLabel: '( 选填 )',
    componentProps: {
      placeholder: '请填写文章来源,默认为当前项目',
    },
    defaultValue: '本站',
  },
  {
    field: 'source_url',
    component: 'Input',
    label: '文章来源链接',
    helpMessage: '用于前端展示(避免违规转载他人文章)',
    subLabel: '( 选填 )',
    componentProps: {
      placeholder: '请填写文章来源链接地址',
    },
  },
  {
    field: 'attachment_path',
    component: 'Upload',
    label: '文章附件路径',
    slot: 'attachment_path',
  },
];
