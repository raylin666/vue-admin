<template>
  <div class="p-4">
    <p>
      <a-button type="primary" @click="handleCreate"> 新增分类 </a-button>
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
                title: '是否确认删除(包含子分类及对应文章) ?',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <CategoryDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    ArticleCategory,
    ArticleCategoryStatus,
    ArticleCategoryDelete,
  } from '/@/api/admin/article';
  import { useDrawer } from '/@/components/Drawer';
  import CategoryDrawer from './CategoryDrawer.vue';
  import { columns } from './categoryForm.data';
  import { notification } from 'ant-design-vue';

  export default defineComponent({
    components: { BasicTable, TableAction, CategoryDrawer },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload, getDataSource, setTableData }] = useTable({
        title: '',
        api: ArticleCategory,
        columns: columns,
        bordered: true,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }
      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }
      async function handleDelete(record: Recordable) {
        return ArticleCategoryDelete(record.id)
          .then(function () {
            let dataSource = getDataSource().filter((item) => item.id !== record.id);
            setTableData(dataSource);

            notification.success({
              message: '系统通知',
              description: '文章分类已完成删除',
            });
          })
          .catch(function () {});
      }
      function handleSuccess() {
        reload();
      }
      function handleEditEnd(record: Recordable) {
        if (['status'].includes(record.key)) {
          return ArticleCategoryStatus({
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
      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleSuccess,
        handleEditEnd,
        handleEdit,
        handleDelete,
      };
    },
  });
</script>
