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
              onClick: tableInfo.bind(null, record),
            },
            {
              label: 'DDL',
              type: 'primary',
              icon: 'ant-design:insert-row-below-outlined',
              onClick: tableInfo.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <TableListDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
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
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      async function tableInfo(record: Recordable) {
        const content = await TableInfo(record.Database + '.' + record.Name);
        openDrawer(true, { content });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        tableInfo,
        handleSuccess,
      };
    },
  });
</script>
