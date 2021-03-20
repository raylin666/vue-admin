<template>
  <div class="p-4">

    <p><a-button type="primary" @click="handleCreate"> 新增分类 </a-button></p>

    <BasicTable @register="registerTable" @edit-end="handleEditEnd" @edit-cancel="">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑分类',
              icon: 'ant-design:edit-filled',
              onClick: handleEdit.bind(null, record),
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
  import {ArticleCategory, ArticleCategoryStatus} from '/@/api/admin/article';
  import {useDrawer} from "/@/components/Drawer";
  import CategoryDrawer from "./CategoryDrawer.vue";
  import { columns } from './categoryForm.data';

  export default defineComponent({
    components: { BasicTable, TableAction, CategoryDrawer },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '',
        api: ArticleCategory,
        columns: columns,
        bordered: true,
        actionColumn: {
          width: 140,
          title: '编辑分类',
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
      function handleSuccess() {
        reload();
      }
      function handleEditEnd(record: Recordable) {
        if (['status'].includes(record.key)) {
          return ArticleCategoryStatus({
            key: record.key,
            id: record.record.id,
            value: record.value ? 1 : 0,
          })
        }
      }
      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleSuccess,
        handleEditEnd,
        handleEdit,
      };
    },
  });
</script>
