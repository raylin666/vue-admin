import { defHttp } from '/@/utils/http/axios';
import { ArticleListGetResultModel, ArticleParams } from "../model/articleModel";

enum Api {
  List = '/v1/article/list',
}

export const ArticleList = (params: ArticleParams) =>
  defHttp.get<ArticleListGetResultModel>({
    url: Api.List,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });


