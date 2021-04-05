import {
  ArticleCategoryListResultModel,
  ArticleCategoryRequestParams,
  ArticleCategoryListPidResultModel,
} from '../model/articleCategoryModel';
import {
  ArticleInfoModel,
  ArticleListParams,
  ArticleListResultModel,
  ArticleRequestParams,
} from '../model/articleModel';
import { BasicStatusParams } from '../model/Model';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  ArticleList = '/v1/article/list',
  ArticleInfo = '/v1/article/info',
  ArticleAdd = '/v1/article/add',
  ArticleEdit = '/v1/article/edit',
  ArticleStatus = '/v1/article/status',
  ArticleDelete = '/v1/article/delete',
  ArticleCategory = '/v1/article/category/list',
  ArticleCategoryPid = '/v1/article/category/listPid',
  ArticleCategoryStatus = '/v1/article/category/status',
  ArticleCategoryAdd = '/v1/article/category/add',
  ArticleCategoryEdit = '/v1/article/category/edit',
  ArticleCategoryDelete = '/v1/article/category/delete',
}

/**
 * @description: 文章列表
 * @param params
 * @returns
 */
export const ArticleList = (params: ArticleListParams) =>
  defHttp.get<ArticleListResultModel>({
    url: Api.ArticleList,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

/**
 * @description: 文章内容详情
 * @param id
 */
export const ArticleInfo = (id: number) =>
  defHttp.get<ArticleInfoModel>({
    url: Api.ArticleInfo + '/' + id,
    headers: {
      ignoreCancelToken: true,
    },
  });

/**
 * @description: 新增文章
 * @param params
 * @returns
 */
export function ArticleAdd(params: ArticleRequestParams) {
  return defHttp.post({
    url: Api.ArticleAdd,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 修改文章
 * @param params
 * @returns
 */
export function ArticleEdit(params: ArticleRequestParams) {
  return defHttp.post({
    url: Api.ArticleEdit,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 删除文章
 * @param id
 * @returns
 */
export function ArticleDelete(id: number) {
  return defHttp.post({
    url: Api.ArticleDelete + '/' + id,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 文章状态变更
 * @param params
 * @returns
 */
export function ArticleStatus(params: BasicStatusParams) {
  return defHttp.post({
    url: Api.ArticleStatus,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 文章分类列表
 * @returns
 */
export const ArticleCategory = () =>
  defHttp.get<ArticleCategoryListResultModel>({
    url: Api.ArticleCategory,
    headers: {
      ignoreCancelToken: true,
    },
  });

/**
 * @description: 文章一级分类列表
 * @returns
 */
export const ArticleCategoryPid = () =>
  defHttp.get<ArticleCategoryListPidResultModel>({
    url: Api.ArticleCategoryPid,
    headers: {
      ignoreCancelToken: true,
    },
  });

/**
 * @description: 文章分类状态变更
 * @param params
 * @returns
 */
export function ArticleCategoryStatus(params: BasicStatusParams) {
  return defHttp.post({
    url: Api.ArticleCategoryStatus,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 新增文章分类
 * @param params
 * @returns
 */
export function ArticleCategoryAdd(params: ArticleCategoryRequestParams) {
  return defHttp.post({
    url: Api.ArticleCategoryAdd,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 修改文章分类
 * @param params
 * @returns
 */
export function ArticleCategoryEdit(params: ArticleCategoryRequestParams) {
  return defHttp.post({
    url: Api.ArticleCategoryEdit,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

/**
 * @description: 删除文章分类
 * @param id
 * @returns
 */
export function ArticleCategoryDelete(id: number) {
  return defHttp.post({
    url: Api.ArticleCategoryDelete + '/' + id,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
