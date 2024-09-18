import { IUser } from "./user";

export interface IPost {
  id: number;
  body: string;
  createdAt: Date;
  user: IUser;
}
