// Interface data format used to return a unified format

export function resultSuccess<T = any>(data: T, { message = 'ok' } = {}) {
  return {
    code: 200,
    message,
    data,
    type: 'success',
  };
}

export function resultPageSuccess<T = any>(
  page: number,
  per_page: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(page, per_page, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(message = 'Request failed', { code = -1, data = null } = {}) {
  return {
    code,
    message,
    data,
    type: 'error',
  };
}

export function pagination<T = any>(pageNo: number, per_page: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(per_page);
  const ret =
    offset + Number(per_page) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(per_page));
  return ret;
}
