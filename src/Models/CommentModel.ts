import { IUser } from "./UserModel"

export interface IComment {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: IUser,
    replyingTo:number;
    isAReply:boolean;
    replies: IComment[]
  };

  