import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 0,
  menu: {
    path: '/home',
    name: t('routes.home.index'),
  },
};
export default menu;
