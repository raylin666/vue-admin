import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const menu: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/systemlogs',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.system.index'),
  },
  children: [
    {
      path: 'systemlogs',
      name: 'SystemSystemLogs',
      component: () => import('/@/views/admin/system/systemlogs.vue'),
      meta: {
        title: t('routes.system.systemlogs'),
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default menu;
