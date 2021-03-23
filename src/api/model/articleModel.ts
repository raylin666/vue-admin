import { BasicPageParams, BasicFetchResult } from './Model';
/**
 * @description: Request list interface parameters
 */
export type ArticleParams = BasicPageParams;

export type ArticlePostParams = {
    id: number,
    title: string;
    author: string;
    summary: string;
    cover: string;
    sort: number;
    recommend_flag: number;
    comment_flag: number;
    user_id: number;
    status: number;
    release_time: number;
    source: string;
    source_url: string;
    content: string;
    keyword: string;
    attachment_path: any;
};

export interface ArticleListItem {
  article_id: number;
  author: string;
  summary: string;
  cover: string;
  sort: number;
  recommend_flag: number;
  comment_flag: number;
  view_count: number;
  comment_count: number;
  share_count: number;
  publisher_username: string;
  user_id: number;
  last_comment_time: string;
  release_at: string;
  created_at: string;
  updated_at: string;
  title: string;
  source: string;
  source_url: string;
  content: string;
  keyword: string;
  attachment_path: string;
  status: number;
}

/**
 * @description: Request list return value
 */
export type ArticleListGetResultModel = BasicFetchResult<ArticleListItem>;
