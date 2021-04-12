<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '表结构',
              type: 'primary',
              icon: 'ant-design:insert-row-below-outlined',
              onClick: getTableInfo.bind(null, record, 'column'),
            },
            {
              label: 'DDL',
              type: 'dashed',
              icon: 'ant-design:api-twotone',
              onClick: getTableInfo.bind(null, record, 'default'),
            },
            {
              label: '表索引',
              type: 'danger',
              icon: 'ant-design:environment-outlined',
              onClick: getTableInfo.bind(null, record, 'index'),
            },
          ]"
        />
      </template>
    </BasicTable>
    <TableListDrawer @register="registerDrawer" @success="handleSuccess" :action="act" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { TableInfo, TableList } from '/@/api/admin/database';
  import { columns } from './tableForm.data';
  import { useDrawer } from '/@/components/Drawer';
  import TableListDrawer from './TableListDrawer.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, TableListDrawer },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '',
        api: TableList,
        columns: columns,
        bordered: true,
        actionColumn: {
          width: 260,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const act = ref('default');

      async function getTableInfo(record: Recordable, action) {
        act.value = action;
        const content = await TableInfo(record.Database + '.' + record.Name);
        openDrawer(true, { content });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        getTableInfo,
        handleSuccess,
        TableListDrawer,
        act,
      };
    },
  });
</script>
