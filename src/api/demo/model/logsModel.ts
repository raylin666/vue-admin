export interface LogsTableListModel {
  id: number;
  uid: number;
  real_username: string;
  host: string;
  port: string;
  method: string;
  path: string;
  params: string;
  operation_method: string;
  operation_description: string;
  duration: string;
  ip: string;
  created_at: string;
}
