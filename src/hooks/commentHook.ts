import {  useState } from "react";
import { ResponseStatus } from "../Models/ApiResponse";
import { IUser } from "../Models/UserModel";
import { addComment,getComments } from "../service/getComment";

export function useCommentHook({user,shouldFetchComments}:{user:IUser|null,shouldFetchComments:boolean}){
    const [commentIds, setCommentIds] = useState<number[]>([]);
    const [status, setStatus] = useState<ResponseStatus>(ResponseStatus.none);
    async function insertComment(content: string) {
      if (user != null) {
        setStatus(ResponseStatus.loading);
        const commentId = await addComment(content, user);
        const comments = [...commentIds];
        comments.unshift(commentId);
        setCommentIds(comments);
        setStatus(ResponseStatus.success);
      }
    }
    async function fetchComments(){
      setStatus(ResponseStatus.loading);
        getComments().then((x) => {
          setCommentIds(x);
          setStatus(ResponseStatus.success);
        });
    }
    return {
      commentIds,
      insertComment,
      status,
      fetchComments
    }
}