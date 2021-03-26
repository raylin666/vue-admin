import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/',
  name: '',
  component: LAYOUT,
  redirect: '/home',
  meta: {
    icon: 'ion:home-outline',
    title: '',
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('/@/views/admin/home/index.vue'),
      meta: {
        title: t('routes.home.index'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
