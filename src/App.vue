<template>
  <ConfigProvider
    v-bind="lockEvent"
    :locale="getAntdLocale"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import { AppProvider } from '/@/components/Application';

import { initAppConfigStore } from '/@/logics/initAppConfig';

import { useLockPage } from '/@/hooks/web/useLockPage';
import { useLocale } from '/@/locales/useLocale';

import { useWatermark } from '/@/hooks/web/useWatermark';

export default defineComponent({
  name: 'App',
  components: { ConfigProvider, AppProvider },
  setup() {
    // support Multi-language
    const { getAntdLocale } = useLocale();

    // Initialize vuex internal system configuration
    initAppConfigStore();

    // Create a lock screen monitor
    const lockEvent = useLockPage();

    // 水印
    const areaRef = ref<Nullable<HTMLElement>>(null);
    const { setWatermark } = useWatermark();
    //setWatermark('linshan');

    return {
      getAntdLocale,
      lockEvent,
      areaRef,
      setWatermark,
    };
  },
});
</script>
