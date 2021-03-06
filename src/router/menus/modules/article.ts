import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t('routes.article.index'),
    path: '/article',
    children: [
      {
        path: 'list',
        name: t('routes.article.list'),
      },
      {
        path: 'add',
        name: t('routes.article.add'),
      },
      {
        path: 'edit',
        name: t('routes.article.edit'),
      },
      {
        path: 'category',
        name: t('routes.article.category'),
      },
    ],
  },
};
export default menu;
