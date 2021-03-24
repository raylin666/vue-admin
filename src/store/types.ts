import { MenuModeEnum, MenuTypeEnum } from '../enums/menuEnum';

export interface LockInfo {
  pwd: string | undefined;
  isLock: boolean;
}

export interface UserInfo {
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  real_username: string;
  // 介绍
  desc?: string;
  // 头像
  avatar: string;
  // 手机号
  phone: string;
  // 创建时间
  created_at: string;
  // 电子邮箱
  email: string;
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
