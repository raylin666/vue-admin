import { SystemLogsResultModel, SystemLogsParams } from '../demo/model/logsModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  SystemLogs = '/v1/logs/system',
}

/**
 * @description: 获取系统日志接口
 */
export function getSystemLogs(params: SystemLogsParams) {
  return defHttp.get<SystemLogsResultModel>({
    url: Api.SystemLogs,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
