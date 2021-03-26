import {
  ArticleCategoryListParams,
  ArticleCategoryListResultModel,
  ArticleCategoryRequestParams,
} from '../model/articleCategoryModel';
import {
  ArticleListParams,
  ArticleListResultModel,
  ArticleRequestParams,
} from '../model/articleModel';
import { BasicStatusParams } from '../model/Model';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  ArticleList = '/v1/article/list',
  ArticleAdd = '/v1/article/add',
  ArticleStatus = '/v1/article/status',
  ArticleCategory = '/v1/article/category/list',
  ArticleCategoryStatus = '/v1/article/category/status',
  ArticleCategoryAdd = '/v1/article/category/add',
  ArticleCategoryEdit = '/v1/article/category/edit',
  ArticleCategoryDelete = '/v1/article/category/delete',
}

export const ArticleList = (params: ArticleListParams) =>
  defHttp.get<ArticleListResultModel>({
    url: Api.ArticleList,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

export function ArticleAdd(params: ArticleRequestParams) {
  return defHttp.post({
    url: Api.ArticleAdd,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function ArticleStatus(params: BasicStatusParams) {
  return defHttp.post({
    url: Api.ArticleStatus,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export const ArticleCategory = (params: ArticleCategoryListParams) =>
  defHttp.get<ArticleCategoryListResultModel>({
    url: Api.ArticleCategory,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

export function ArticleCategoryStatus(params: BasicStatusParams) {
  return defHttp.post({
    url: Api.ArticleCategoryStatus,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function ArticleCategoryAdd(params: ArticleCategoryRequestParams) {
  return defHttp.post({
    url: Api.ArticleCategoryAdd,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function ArticleCategoryEdit(params: ArticleCategoryRequestParams) {
  return defHttp.post({
    url: Api.ArticleCategoryEdit,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function ArticleCategoryDelete(id) {
  return defHttp.post({
    url: Api.ArticleCategoryDelete + '/' + id,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
