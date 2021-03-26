/**
 * @description: 登录请求参数
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: 获取用户信息请求参数
 */
export interface GetUserInfoParams {
  uid: string | number;
}

/**
 * @description: 登录返回结果
 */
export interface LoginResultModel {
  uid: string | number;
  token: string;
  roles: RoleInfo[];
  ttl: number;
  expired_at: number;
}

/**
 * @description 用户角色信息
 */
export interface RoleInfo {
  id: number;
  name: string;
  desc: string;
}

/**
 * @description: 获取用户信息
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户ID
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  real_username: string;
  // 介绍
  desc?: string;
  // 头像
  avatar: string;
  // 电话区号
  phone_area: string | number;
  // 手机号码
  phone: string | number;
  // 电子邮箱
  email: string;
  // 状态 0关闭 1开启
  status: number;
  // 创建时间
  created_at: string;
}
