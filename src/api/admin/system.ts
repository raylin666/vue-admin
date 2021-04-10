import { defHttp } from '/@/utils/http/axios';
import { SystemInfoResultModel } from '../model/systemModel';

enum Api {
  Info = '/v1/system/info',
}

/**
 * @description: 获取系统公共信息接口
 */
export const info = () =>
  defHttp.get<SystemInfoResultModel>({
    url: Api.Info,
  });
