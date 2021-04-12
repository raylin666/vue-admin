<template>
  <div ref="chartRef" :style="{ height, width }"></div>
  <a-row class="pl-3 pr-3" style="font-size: 14px; color: #6761cc">
    <a-col :sm="24" :md="12" :lg="12"> CPU主频 </a-col>
    <a-col :sm="24" :md="12" :lg="12" align="right" v-if="isShow">
      {{ sysInfo.system.cpuGHz }}
    </a-col>
  </a-row>
  <hr style="margin-top: 10px; margin-bottom: 10px" />
  <a-row class="pl-3 pr-3" style="font-size: 14px; color: #1a9287">
    <a-col :sm="24" :md="12" :lg="12"> 核心数 </a-col>
    <a-col :sm="24" :md="12" :lg="12" align="right" v-if="isShow">
      {{ sysInfo.system.cpuCounts }}
    </a-col>
  </a-row>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, Ref } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  import { Row, Col } from 'ant-design-vue';

  import { basicProps } from './props';

  export default defineComponent({
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
    },
    props: {
      ...basicProps,
      datas: {
        type: Object,
        default: null,
      },
    },
    watch: {
      datas: {
        deep: true, // 深度监听
        handler(newVal) {
          this.isShow = true;
          this.sysInfo = newVal;
          this.m2R2Data[0].value = parseFloat(newVal.system.cpuPercent);
          this.m2R2Data[1].value = 100 - this.m2R2Data[0].value;
          this.theSetOptions(newVal.system.cpuPercent, this.m2R2Data);
        },
      },
    },
    setup() {
      const isShow = ref(false);

      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

      const m2R2Data = ref([
        { value: 0, name: '使用率', itemStyle: { color: '#1b65b9' } },
        { value: 100, name: '剩余率', itemStyle: { color: '#cccccc' } },
      ]);

      const sysInfo = ref<any>({});

      onMounted(() => {
        theSetOptions('0%', m2R2Data.value);
      });

      function theSetOptions(subtext: string, value: any) {
        setOptions({
          title: [
            {
              text: 'CPU',
              subtext: subtext,
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
              data: value,
              animationDuration: 3000,
            },
          ],
        });
      }

      return { chartRef, sysInfo, m2R2Data, theSetOptions, isShow };
    },
  });
</script>
