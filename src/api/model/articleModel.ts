import { BasicPageParams, BasicFetchResult } from './Model';
/**
 * @description: 请求文章列表参数
 */
export type ArticleListParams = BasicPageParams;

/**
 * @description: 请求文章接口参数
 */
export type ArticleRequestParams = {
  id: number;
  title: string;
  author: string;
  summary: string;
  cover: string;
  sort: number;
  recommend_flag: number;
  comment_flag: number;
  user_id: number;
  status: number;
  source: string;
  source_url: string;
  content: string;
  keyword: any;
  attachment_path: any;
  category: any;
};

export interface ArticleInfoItem {
  article_id: number;
  author: string;
  summary: string;
  cover: string;
  sort: number;
  recommend_flag: string;
  comment_flag: string;
  view_count: number;
  comment_count: number;
  share_count: number;
  publisher_username: string;
  user_id: number;
  last_comment_time: string;
  created_at: string;
  updated_at: string;
  title: string;
  source: string;
  source_url: string;
  content: string;
  keyword: string;
  attachment_path: string;
  status: number;
  category: any;
}

/**
 * @description: 文章内容详情模型
 */
export type ArticleInfoModel = ArticleInfoItem;

/**
 * @description: 文章列表数据模型
 */
export type ArticleListResultModel = BasicFetchResult<ArticleInfoItem>;
