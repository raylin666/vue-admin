/**
 * @description: 请求文章分类接口参数
 */
export interface SystemInfoResultModel {
  system: SystemInfo;
  userCount: number;
  articleCount: number;
  cpuPercent: string;
  memPercent: string;
  diskPercent: string;
  cpuGHz: string;
  cpuCounts: number;
  memTotal: string;
  memUsed: string;
  diskTotal: string;
  diskUsed: string;
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
