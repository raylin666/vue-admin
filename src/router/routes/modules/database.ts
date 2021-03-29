import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const menu: AppRouteModule = {
  path: '/database',
  name: 'Database',
  component: LAYOUT,
  redirect: '/database/tableList',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.database.index'),
  },
  children: [
    {
      path: 'tableList',
      name: 'DatabaseTableList',
      component: () => import('/@/views/admin/database/tableList.vue'),
      meta: {
        title: t('routes.database.tableList'),
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default menu;
