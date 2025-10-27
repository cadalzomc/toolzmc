import { TResponseCode } from "@/types/app.types";

export interface IResponseMeta {
  total: number;
  page: number;
  lastPage: number;
}

export interface IResponse<T> {
  code: TResponseCode;
  message: string;
  data?: T;
  meta?: IResponseMeta;
}
