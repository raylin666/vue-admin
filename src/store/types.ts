import { MenuModeEnum, MenuTypeEnum } from '../enums/menuEnum';

export interface LockInfo {
  pwd: string | undefined;
  isLock: boolean;
}

export interface UserInfo {
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

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
