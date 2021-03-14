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
}
