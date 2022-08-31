import React, { useEffect, useState } from 'react'

import { IComment } from '../../Models/CommentModel'
import { getCommentInfo } from '../../service/getComment';
import DisplayComment from '../DisplayComment/DisplayComment';

interface ICommentContext {
  comment:IComment|null;
  changeLikes:(num:number) => void;
  insertReply:(reply :string) => void;
  updateComment:(content:string) => void;
}
export const commentContext = React.createContext<ICommentContext|null>(null);
export default function CommentStateHandler({id,insertReply}:{id:number,insertReply:(c:string)=>void}) {
    const [comment, setComment] = useState<IComment|null>(null);
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

    useEffect(() => {
      getCommentInfo(id).then(x => setComment(x));
    },[]);
  return (
    <commentContext.Provider value = {{comment, changeLikes,insertReply,updateComment}}>
    {(comment!=null) && <DisplayComment comment={comment}/>}
    </commentContext.Provider>
  )
}
