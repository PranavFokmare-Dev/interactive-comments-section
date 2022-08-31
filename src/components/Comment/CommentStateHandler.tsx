import React, { useEffect, useState } from 'react'

import { IComment } from '../../Models/CommentModel'
import { getCommentInfo } from '../../service/getComment';
import DisplayComment from '../DisplayComment/DisplayComment';

interface ICommentContext {
  comment:IComment|null;
  like:()=>void;
  dislike:()=>void;
  insertReply:(reply :string) => Promise<void>;
  updateComment:(content:string) => void;
  deleteComment:()=>void;
  isDeleted:boolean;
}
export const commentContext = React.createContext<ICommentContext|null>(null);
export default function CommentStateHandler({id,insertReply}:{id:number,insertReply:(c:string)=>Promise<void>}) {
    const [comment, setComment] = useState<IComment|null>(null);
    const [isDeleted,setIsDeleted] = useState<boolean>(false);
    function updateComment(content:string){
      if(comment!=null){
        const newComment = {...comment};
        newComment.content = content;
        setComment({...comment, content:content});
      }

    }
    function changeLikes(num:number){
      if(comment!=null){
        const newComment = {...comment};
        newComment.score +=num;
        setComment(newComment);
      }
    }
    function like(){
      changeLikes(1);
    }
    function dislike(){
      changeLikes(-1);
    }
    function deleteComment(){
      if(comment!=null){
        const deletedComment : IComment= {
          id: comment.id,
          content: "deleted comment",
          createdAt: "",
          score: 0,
          user: comment.user,
          replyingTo:comment.replyingTo,
          isAReply:comment.isAReply,
          replies: comment.replies
        }
        setComment(deletedComment);
        setIsDeleted(true);
      }
    }

    useEffect(() => {
      getCommentInfo(id).then(x => setComment(x));
    },[]);
  return (
    <commentContext.Provider value = {{comment, like,dislike,insertReply,updateComment,deleteComment,isDeleted}}>
    {(comment!=null) && <DisplayComment comment={comment}/>}
    </commentContext.Provider>
  )
}
