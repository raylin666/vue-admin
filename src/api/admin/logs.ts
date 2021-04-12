import { LogsTableListModel } from '../demo/model/logsModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  SystemLogs = '/v1/logs/system',
}

/**
 * @description: 获取系统日志接口
 */
export function getSystemLogs() {
  return defHttp.get<LogsTableListModel>({
    url: Api.SystemLogs,
  });
}
