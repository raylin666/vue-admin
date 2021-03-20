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
    {
      path: 'add',
      name: 'ArticleAdd',
      component: () => import('/@/views/article/add.vue'),
      meta: {
        title: t('routes.article.add'),
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'edit',
      name: 'ArticleEdit',
      component: () => import('/@/views/article/edit.vue'),
      meta: {
        title: t('routes.article.edit'),
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'category',
      name: 'ArticleCategory',
      component: () => import('/@/views/article/category.vue'),
      meta: {
        title: t('routes.article.category'),
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default article;
