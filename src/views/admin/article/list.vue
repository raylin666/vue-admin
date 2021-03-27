<template>
  <div class="p-4">
    <p>
      <router-link to="/article/add">
        <a-button type="primary"> 新增文章 </a-button>
      </router-link>
    </p>

    <BasicTable @register="registerTable" @edit-end="handleEditEnd">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              type: 'primary',
              icon: 'ant-design:edit-filled',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '删除',
              icon: 'ant-design:delete-outlined',
              color: 'error',
              type: 'primary',
              popConfirm: {
                title: '是否确认删除文章 ?',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>

      <template #cover="{ record }">
        <TableImg :imgList="[record.cover]" :size="60" />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction, TableImg } from '/@/components/Table';

  import { ArticleDelete, ArticleList, ArticleStatus } from '/@/api/admin/article';
  import router from '/@/router';
  import { h } from 'vue';
  import { notification, Tag } from 'ant-design-vue';

  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 80,
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 240,
    },
    {
      title: '封面',
      width: 80,
      dataIndex: 'cover',
      slots: { customRender: 'cover' },
    },
    {
      title: '一级分类',
      width: 160,
      dataIndex: 'categoryName',
      customRender: ({ record }) => {
        let html = '';
        for (let index = 0; index < record.category.length; index++) {
          if (index === 0) {
            html += record.category[index].name;
          } else {
            html += ' | ' + record.category[index].name;
          }
        }
        const color = html ? 'green' : 'red';
        return h(Tag, { color: color }, () => (color == 'green' ? html : '暂无'));
      },
    },
    {
      title: '发布者ID',
      width: 120,
      dataIndex: 'user_id',
    },
    {
      title: '作者',
      width: 120,
      dataIndex: 'author',
    },
    {
      title: '状态',
      width: 100,
      dataIndex: 'status',
      edit: true,
      editable: false,
      editComponent: 'Switch',
      editValueMap: (value) => {
        return value ? '开启' : '关闭';
      },
    },
    {
      title: '推荐',
      width: 100,
      dataIndex: 'recommend_flag',
      edit: true,
      editable: false,
      editComponent: 'Switch',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
    },
    {
      title: '可评论',
      width: 100,
      dataIndex: 'comment_flag',
      edit: true,
      editable: true,
      editComponent: 'Switch',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
    },
    {
      title: '创建|更新 时间',
      dataIndex: 'created_at',
      width: 180,
      customRender: ({ record }) => {
        return record.created_at + '\n' + record.updated_at;
      },
    },
    {
      title: '排序',
      width: 100,
      dataIndex: 'sort',
    },
    {
      title: '浏览量',
      width: 100,
      dataIndex: 'view_count',
    },
    {
      title: '评论数',
      width: 100,
      dataIndex: 'comment_count',
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction, TableImg },
    setup() {
      const [registerTable, { getDataSource, setTableData }] = useTable({
        title: '',
        api: ArticleList,
        columns: columns,
        bordered: true,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleEdit(record: Recordable) {
        return router.push('/article/edit?id=' + record.id);
      }
      function handleEditEnd(record: Recordable) {
        if (['status', 'recommend_flag', 'comment_flag'].includes(record.key)) {
          return ArticleStatus({
            key: record.key,
            id: record.record.id,
            value: record.value ? 1 : 0,
          }).then(function () {
            notification.success({
              message: '系统通知',
              description: '状态变更已完成',
            });
          });
        }
      }
      async function handleDelete(record: Recordable) {
        return ArticleDelete(record.id)
          .then(function () {
            let dataSource = getDataSource().filter((item) => item.id !== record.id);
            setTableData(dataSource);

            notification.success({
              message: '系统通知',
              description: '文章已完成删除',
            });
          })
          .catch(function () {});
      }
      return {
        registerTable,
        handleEdit,
        handleEditEnd,
        handleDelete,
      };
    },
  });
</script>
