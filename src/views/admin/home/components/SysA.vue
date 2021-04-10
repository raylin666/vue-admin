<template>
  <div ref="chartRef" :style="{ height, width }"></div>
  <a-row class="pl-3 pr-3" style="font-size: 14px; color: #6761cc">
    <a-col :sm="24" :md="12" :lg="12"> CPU主频 </a-col>
    <a-col :sm="24" :md="12" :lg="12" align="right"> 2.50GHz </a-col>
  </a-row>
  <hr style="margin-top: 10px; margin-bottom: 10px" />
  <a-row class="pl-3 pr-3" style="font-size: 14px; color: #1a9287">
    <a-col :sm="24" :md="12" :lg="12"> 核心数 </a-col>
    <a-col :sm="24" :md="12" :lg="12" align="right"> 1 </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  import { Row, Col } from 'ant-design-vue';

  import { basicProps } from './props';

  const m2R2Data = [
    { value: 1.13, name: '使用率', itemStyle: { color: '#1b65b9' } },
    { value: 98.87, name: '剩余率', itemStyle: { color: '#cccccc' } },
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
              text: 'CPU',
              subtext: '1.13%',
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
              name: 'CPU使用率',
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
