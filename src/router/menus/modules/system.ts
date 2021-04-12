import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 30,
  menu: {
    name: t('routes.system.index'),
    path: '/system',
    children: [
      {
        path: 'systemlogs',
        name: t('routes.system.systemlogs'),
      },
    ],
  },
};
export default menu;
