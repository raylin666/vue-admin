<template>
  <BasicDrawer v-bind="$attrs" :isDetail="true" @register="registerDrawer" title="查看数据库表结构">
    <div
      class="h-20"
      style="
        margin-top: 20px;
        margin-left: 20px;
        font-size: 16px;
        line-height: 30px;
        color: #1d2d67;
      "
    >
      <pre> {{ content }} </pre>
    </div>
    <template #titleToolbar> </template>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  export default defineComponent({
    name: 'TableListDrawer',
    components: { BasicDrawer },
    setup() {
      const content: any = ref('');
      const [registerDrawer] = useDrawerInner(async (data) => {
        content.value = data.content.CreateTable;
      });

      return {
        registerDrawer,
        content,
      };
    },
  });
</script>
