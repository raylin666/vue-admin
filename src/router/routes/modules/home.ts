import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.dashboard.home'),
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('/@/views/dashboard/home/index.vue'),
      meta: {
        title: t('routes.dashboard.home'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
