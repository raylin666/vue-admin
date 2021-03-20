import { BasicPageParams, BasicFetchResult } from './Model';
/**
 * @description: Request list interface parameters
 */
export type ArticleCategoryParams = BasicPageParams;

export type ArticleCategoryPostParams = {
  id: number;
  pid: number;
  name: string;
  sort: number;
  status: number;
}

export interface ArticleCategoryListItem {
  id: number;
  pid: number;
  name: string;
  sort: number;
  status: number;
}

/**
 * @description: Request list return value
 */
export type ArticleCategoryListGetResultModel = BasicFetchResult<ArticleCategoryListItem>;
