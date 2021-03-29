import { DatabaseTableInfoModel, DatabaseTableListModel } from '../demo/model/databaseModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  TableList = '/v1/database/table/list',
  TableInfo = '/v1/database/table/info',
}

/**
 * @description: 获取数据表列表接口
 */
export function TableList() {
  return defHttp.get<DatabaseTableListModel>({
    url: Api.TableList,
  });
}

/**
 * @description: 获取数据表详情接口
 */
export function TableInfo(tableName: string) {
  return defHttp.get<DatabaseTableInfoModel>({
    url: Api.TableInfo + '/' + tableName,
  });
}
