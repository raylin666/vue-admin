<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getSystemLogs } from '/@/api/admin/logs';
  import { columns } from './tableForm.data';

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '',
        api: getSystemLogs,
        columns: columns,
        bordered: true,
      });

      return {
        registerTable,
        reload,
      };
    },
  });
</script>
