import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 20,
  menu: {
    name: t('routes.database.index'),
    path: '/database',
    children: [
      {
        path: 'tableList',
        name: t('routes.database.tableList'),
      },
    ],
  },
};
export default menu;
