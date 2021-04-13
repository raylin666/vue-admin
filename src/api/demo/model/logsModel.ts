import { BasicPageParams, BasicFetchResult } from '../../model/Model';

export interface SystemLogsItem {
  id: number;
  uid: number;
  real_username: string;
  host: string;
  port: string;
  method: string;
  path: string;
  params: string;
  operation_method: string;
  operation_description: string;
  duration: string;
  ip: string;
  created_at: string;
}

/**
 * @description: 请求系统日志参数
 */
export type SystemLogsParams = BasicPageParams;

/**
 * @description: 文章列表数据模型
 */
export type SystemLogsResultModel = BasicFetchResult<SystemLogsItem>;
