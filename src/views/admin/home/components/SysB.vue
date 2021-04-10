<template>
  <div ref="chartRef" :style="{ height, width }"></div>
  <a-row class="pl-3 pr-3" style="font-size: 14px; color: #6761cc">
    <a-col :sm="24" :md="12" :lg="12"> 总内存 </a-col>
    <a-col :sm="24" :md="12" :lg="12" align="right"> 0G </a-col>
  </a-row>
  <hr style="margin-top: 10px; margin-bottom: 10px" />
  <a-row class="pl-3 pr-3" style="font-size: 14px; color: #1a9287">
    <a-col :sm="24" :md="12" :lg="12"> 已用内存 </a-col>
    <a-col :sm="24" :md="12" :lg="12" align="right"> 0G </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  import { Row, Col } from 'ant-design-vue';

  import { basicProps } from './props';

  const m2R2Data = [
    { value: 70, name: '使用率', itemStyle: { color: 'red' } },
    { value: 30, name: '剩余率', itemStyle: { color: '#cccccc' } },
  ];
  export default defineComponent({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    props: basicProps,
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

      onMounted(() => {
        setOptions({
          title: [
            {
              text: '内存',
              subtext: '70%',
              textStyle: {
                fontSize: 12,
                color: '#4B535E85',
              },
              subtextStyle: {
                fontSize: 18,
                color: 'black',
              },
              textAlign: 'center',
              left: '49%',
              top: '37%',
            },
          ],
          tooltip: {
            trigger: 'item',
            backgroundColor: '#ffffff',
          },
          series: [
            {
              name: '内存使用率',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['45%', '65%'],
              label: {
                show: true,
              },
              data: m2R2Data,
              animationDuration: 3000,
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
