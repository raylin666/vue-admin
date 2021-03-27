import { defHttp } from '/@/utils/http/axios';
import { CommonInfoResultModel } from '/@/api/model/commonModel';

enum Api {
  Info = '/v1/common/info',
}

/**
 * @description: 获取系统公共信息接口
 */
export function info() {
  return defHttp.get<CommonInfoResultModel>({
    url: Api.Info,
  });
}
