import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const article: AppRouteModule = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  redirect: '/article/list',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.dashboard.article'),
  },
  children: [
    {
      path: 'list',
      name: 'ArticleList',
      component: () => import('/@/views/article/list.vue'),
      meta: {
        title: t('routes.article.lists'),
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default article;
