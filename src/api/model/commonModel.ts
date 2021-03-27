/**
 * @description: 请求文章分类接口参数
 */
export interface CommonInfoResultModel {
  system: SystemInfo;
  userCount: number;
  articleCount: number;
}

/**
 * @description: 系统信息
 */
export interface SystemInfo {
  projectName: string;
  phpVersion: string;
  swooleVersion: string;
  serverFramework: string;
  ui: string;
  serverTime: string;
  user: string;
  phpUname: string;
  phpSapiName: string;
}
