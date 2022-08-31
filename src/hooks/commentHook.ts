import { useEffect, useState } from "react";
import { IUser } from "../Models/UserModel";
import { addComment,getComments } from "../service/getComment";
import { getUserInfo } from "../service/userImage";

export function useCommentHook({user,setUser}:{user:IUser|null,setUser:React.Dispatch<React.SetStateAction<IUser | null>>}){
    const [commentIds, setCommentIds] = useState<number[]>([]);
    function insertComment(content: string) {
      if (user != null) {
        const commentId = addComment(content, user);
        const comments = [...commentIds];
        comments.unshift(commentId);
        setCommentIds(comments);
      }
    }
    useEffect(() => {
      getComments().then((x) => {
        console.log(x);
        setCommentIds(x);
      });
      getUserInfo().then((u) => setUser(u));
    }, []);
  
    return {
      commentIds,
      insertComment
    }
}