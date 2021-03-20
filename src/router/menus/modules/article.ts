import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t('routes.dashboard.article'),
    path: '/article',
    children: [
      {
        path: 'list',
        name: t('routes.article.lists'),
      },
      {
        path: 'add',
        name: t('routes.article.add'),
        hideMenu: true,
      },
      {
        path: 'edit',
        name: t('routes.article.edit'),
        hideMenu: true,
      },
      {
        path: 'category',
        name: t('routes.article.category'),
      },
    ],
  },
};
export default menu;
