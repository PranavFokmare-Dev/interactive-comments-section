import { useEffect, useState } from "react";
import { IUser } from "../Models/UserModel";
import { addComment,getComments } from "../service/getComment";
import { getUserInfo } from "../service/userImage";

export function useCommentHook({user,shouldFetchComments}:{user:IUser|null,shouldFetchComments:boolean}){
    const [commentIds, setCommentIds] = useState<number[]>([]);
    async function insertComment(content: string) {
      if (user != null) {
        const commentId = await addComment(content, user);
        const comments = [...commentIds];
        comments.unshift(commentId);
        setCommentIds(comments);
      }
    }
    useEffect(() => {
      if(shouldFetchComments){
        getComments().then((x) => {
          console.log(x);
          setCommentIds(x);
        });
       
      }

    }, []);
  
    return {
      commentIds,
      insertComment
    }
}