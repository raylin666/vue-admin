import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const menu: AppRouteModule = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  redirect: '/article/list',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.article.index'),
  },
  children: [
    {
      path: 'list',
      name: 'ArticleList',
      component: () => import('/@/views/admin/article/list.vue'),
      meta: {
        title: t('routes.article.list'),
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'add',
      name: 'ArticleAdd',
      component: () => import('/@/views/admin/article/add.vue'),
      meta: {
        title: t('routes.article.add'),
        icon: 'bx:bx-home',
        hideMenu: true,
      },
    },
    {
      path: 'edit',
      name: 'ArticleEdit',
      component: () => import('/@/views/admin/article/edit.vue'),
      meta: {
        title: t('routes.article.edit'),
        icon: 'bx:bx-home',
        hideMenu: true,
      },
    },
    {
      path: 'category',
      name: 'ArticleCategory',
      component: () => import('/@/views/admin/article/category.vue'),
      meta: {
        title: t('routes.article.category'),
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default menu;
