export interface DatabaseTableListModel {
  Name: string;
  Engine: string;
  Version: number;
  Row_format: string;
  Rows: number;
  Avg_row_length: number;
  Data_length: number;
  Max_data_length: number;
  Index_length: number;
  Data_free: number;
  Auto_increment: number;
  Create_time: string;
  Update_time?: string;
  Check_time?: string;
  Collation: string;
  Checksum: any;
  Create_options: string;
  Comment: string;
  Database: string;
}

export interface DatabaseTableInfoModel {
  TableName: string;
  CreateTable: string;
  Columns: any;
  Index: any;
}
