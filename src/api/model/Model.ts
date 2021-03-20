export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export type BasicStatusParams = {
  key: string;
  id: number;
  value: number;
}

export interface BasicFetchResult<T extends any> {
  data: T;
  total: number;
}
