<template>
  <BasicDrawer
    v-bind="$attrs"
    :isDetail="true"
    placement="right"
    :width="width"
    @register="registerDrawer"
    title="查看数据库表结构"
  >
    <div
      v-if="isDefault"
      class="h-20"
      style="
        margin-top: 10px;
        margin-left: 20px;
        font-size: 16px;
        line-height: 25px;
        color: #1d2d67;
      "
    >
      <pre> {{ content.CreateTable }} </pre>
    </div>

    <div v-if="isColumn" class="h-20">
      <BasicTable @register="registerTable" :columns="columns" :dataSource="content.Columns">
        <template #action="{ record }">
          <TableAction />
        </template>
      </BasicTable>
    </div>

    <div v-if="isIndex" class="h-20">
      <BasicTable @register="registerTable" :columns="columnsIndex" :dataSource="content.Index">
        <template #action="{ record }">
          <TableAction />
        </template>
      </BasicTable>
    </div>
    <template #titleToolbar> </template>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns } from './tableColumn.data';
  import { columnsIndex } from './tableIndex.data';
  export default defineComponent({
    name: 'TableListDrawer',
    components: { BasicDrawer, BasicTable, TableAction },
    props: {
      action: {
        type: String,
      },
    },
    watch: {
      action: {
        immediate: true,
        deep: true,
        handler(newVal) {
          if (newVal == 'column') {
            this.isDefault = false;
            this.isColumn = true;
            this.isIndex = false;
            this.width = '100%';
          } else if (newVal == 'index') {
            this.isDefault = false;
            this.isColumn = false;
            this.isIndex = true;
            this.width = '100%';
          } else {
            this.isDefault = true;
            this.isColumn = false;
            this.isIndex = false;
            this.width = '60%';
          }
        },
      },
    },
    setup() {
      const isDefault = ref(true);
      const isColumn = ref(false);
      const isIndex = ref(false);
      const width = ref('60%');
      const content: any = ref('');

      const [registerTable, { reload }] = useTable({
        title: '',
        bordered: true,
        pagination: false,
      });

      const [registerDrawer] = useDrawerInner(async (data) => {
        content.value = data.content;
      });

      return {
        registerDrawer,
        content,
        width,
        isDefault,
        isColumn,
        reload,
        registerTable,
        isIndex,
        columnsIndex,
        columns,
      };
    },
  });
</script>
