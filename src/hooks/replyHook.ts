/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IUser } from "../Models/UserModel";
import { addReply, getReplyIdsForComment } from "../service/getComment";

type replyHookReturn = {
    replies:number[];
    insertReply:(r:string)=>Promise<void>;
}

export function useReplyHook(commentId:number, user:IUser|null){
    const [replies, setReplies] = useState<number[]>([]);
    async function insertReply(content: string) {
      if (user != null) {
        const replyId = await addReply(commentId, content, user);
        const newReplies = [...replies];
        newReplies.unshift(replyId);
        setReplies(newReplies);
      }
    }
    useEffect(() => {
      getReplyIdsForComment(commentId).then((x) => {
        console.log("ReplyIds");
        console.log(x);
        setReplies(x);
      });
    }, []);
    const data : replyHookReturn ={
        replies,
        insertReply
    }
    return data;
}
