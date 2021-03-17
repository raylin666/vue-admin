export interface BasicPageParams {
  page: number;
  per_page: number;
}

export interface BasicFetchResult<T extends any> {
  data: T;
  total: number;
}
