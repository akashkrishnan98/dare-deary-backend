import { Request } from "express";

export interface IKeyValue<T> {
  key: string;
  value: T;
}

export interface IDiary {
  id: string;
  userEmail: string;
  diaryDate: Date;
  title: string;
  content: string;
  createdAt: Date;
  lastModifiedAt: Date;
}

export interface IBearerUser {
  name: string;
}

export type IAuthRequest = Request & { user?: IBearerUser };
