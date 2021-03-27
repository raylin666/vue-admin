import { BasicFetchResult } from './Model';

/**
 * @description: 请求文章分类接口参数
 */
export type ArticleCategoryRequestParams = {
  id: number;
  pid: number;
  name: string;
  sort: number;
  status: number;
};

export interface ArticleCategoryListItem {
  id: number;
  pid: number;
  name: string;
  sort: number;
  status: number;
  child: any;
  child_count: number;
  article_count: number;
}

/**
 * @description: 文章分类数据模型
 */
export type ArticleCategoryListResultModel = BasicFetchResult<ArticleCategoryListItem>;

/**
 * @description: 文章一级分类数据模型
 */
export type ArticleCategoryListPidResultModel = ArticleCategoryListItem[];
