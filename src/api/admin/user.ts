import { defHttp } from '/@/utils/http/axios';
import {
  GetUserInfoModel,
  GetUserInfoParams,
  LoginParams,
  LoginResultModel,
} from '../model/userModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/v1/login',
  GetUserInfo = '/v1/user/info',
}

/**
 * @description: 用户登录接口
 */
export function login(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo(params: GetUserInfoParams) {
  return defHttp.get<GetUserInfoModel>({
    url: Api.GetUserInfo,
    params,
  });
}
