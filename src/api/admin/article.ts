import { defHttp } from '/@/utils/http/axios';
import { ArticleListGetResultModel, ArticleParams } from "../model/articleModel";
import {BasicStatusParams} from "/@/api/model/Model";
import {
  ArticleCategoryListGetResultModel,
  ArticleCategoryParams,
  ArticleCategoryPostParams
} from "../model/articleCategoryModel";

enum Api {
  List = '/v1/article/list',
  STATUS = '/v1/article/status',
  CATEGORY = '/v1/article/category/list',
  CATEGORY_STATUS = '/v1/article/category/status',
  CATEGORY_ADD = '/v1/article/category/add',
  CATEGORY_EDIT = '/v1/article/category/edit',
}

export const ArticleList = (params: ArticleParams) =>
  defHttp.get<ArticleListGetResultModel>({
    url: Api.List,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

export function ArticleStatus (params: BasicStatusParams) {
  return defHttp.post({
    url: Api.STATUS,
    params,
    headers: {
      ignoreCancelToken: true,
    }
  });
}

export const ArticleCategory = (params: ArticleCategoryParams) =>
  defHttp.get<ArticleCategoryListGetResultModel>({
    url: Api.CATEGORY,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });

export function ArticleCategoryStatus (params: BasicStatusParams) {
  return defHttp.post({
    url: Api.CATEGORY_STATUS,
    params,
    headers: {
      ignoreCancelToken: true,
    }
  });
}

export function ArticleCategoryAdd (params: ArticleCategoryPostParams) {
  return defHttp.post({
    url: Api.CATEGORY_ADD,
    params,
    headers: {
      ignoreCancelToken: true,
    }
  });
}

export function ArticleCategoryEdit (params: ArticleCategoryPostParams) {
  return defHttp.post({
    url: Api.CATEGORY_EDIT,
    params,
    headers: {
      ignoreCancelToken: true,
    }
  });
}


