export interface BasicPageParams {
  page: number;
  per_page: number;
}

export type BasicStatusParams = {
  key: string;
  id: number;
  value: number;
};

export interface BasicFetchResult<T extends any> {
  list: T;
  total: number;
}
