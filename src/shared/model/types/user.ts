export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IMessage {
  id: string;
  user: IUser;
  message: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
}
