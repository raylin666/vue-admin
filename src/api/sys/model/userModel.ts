/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  uid: string | number;
}

export interface RoleInfo {
  name: string;
  desc: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  uid: string | number;
  token: string;
  role: RoleInfo[];
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoByUserIdModel {
  role: RoleInfo[];
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  real_username: string;
  // 介绍
  desc?: string;
}
