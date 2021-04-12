<template>
  <div class="p-4 sys">
    <a-row class="pl-2">
      <template v-for="item in growCardList" :key="item.title">
        <a-col :sm="24" :md="12" :lg="6">
          <GrowCard :info="item" />
        </a-col>
      </template>
    </a-row>

    <a-row class="pl-2">
      <a-col :md="24" :lg="24" class="my-3">
        <a-row class="mt-3">
          <a-col :md="24" :lg="8" class="product-total">
            <CollapseContainer class="mr-3" title="CPU使用率" :canExpan="false">
              <SysA :datas="sysInfo" />
            </CollapseContainer>
          </a-col>
          <a-col :md="24" :lg="8">
            <CollapseContainer class="mr-3" title="内存使用率" :canExpan="false">
              <SysB :datas="sysInfo" />
            </CollapseContainer>
          </a-col>
          <a-col :md="24" :lg="8">
            <CollapseContainer class="mr-3" title="磁盘信息" :canExpan="false">
              <SysC :datas="sysInfo" />
            </CollapseContainer>
          </a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-row class="pl-2 pr-2">
      <a-col :md="24" :lg="24" class="my-3">
        <TodoList :datas="sysInfo" />
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SysA from './components/SysA.vue';
  import SysB from './components/SysB.vue';
  import SysC from './components/SysC.vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { Row, Col } from 'ant-design-vue';
  import TodoList from './components/TodoList.vue';
  import { info } from '/@/api/admin/system';
  import iconSvg1 from '/@/assets/svg/dashboard/analysis-icon1.svg';
  import iconSvg2 from '/@/assets/svg/dashboard/analysis-icon2.svg';
  import iconSvg3 from '/@/assets/svg/dashboard/analysis-icon3.svg';
  import iconSvg4 from '/@/assets/svg/dashboard/analysis-icon4.svg';

  export default defineComponent({
    components: {
      GrowCard,
      CollapseContainer,
      SysA,
      SysB,
      SysC,
      TodoList,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const sysInfo: any = ref({});

      const growCardList: any = ref([]);

      onMounted(async () => {
        sysInfo.value = await info();

        growCardList.value = [
          {
            title: '用户数量',
            icon: iconSvg1,
            num: sysInfo.value.userCount,
            up: true,
            mom: '环比增长',
            percent: 2.5,
          },
          {
            title: '文章数量',
            icon: iconSvg2,
            num: sysInfo.value.articleCount,
            up: true,
            mom: '同比增长',
            percent: 3,
          },
          {
            title: '用户数量',
            icon: iconSvg3,
            num: sysInfo.value.userCount,
            up: true,
            mom: '环比增长',
            percent: 2.5,
          },
          {
            title: '文章数量',
            icon: iconSvg4,
            num: sysInfo.value.articleCount,
            up: true,
            mom: '同比增长',
            percent: 3,
          },
        ];
      });

      return {
        growCardList,
        sysInfo,
      };
    },
  });
</script>
<style lang="less" scoped>
  .sys {
    width: 100%;
  }
</style>
