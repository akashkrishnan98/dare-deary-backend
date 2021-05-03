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
