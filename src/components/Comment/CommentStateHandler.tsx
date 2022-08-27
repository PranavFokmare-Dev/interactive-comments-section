import React, { useEffect, useState } from 'react'
import { IComment } from '../../Models/CommentModel'
import { getCommentInfo } from '../../service/getComment';
import DisplayComment from '../DisplayComment/DisplayComment';

export default function CommentStateHandler({id}:{id:number}) {
    const [comment, setComment] = useState<IComment|null>();
    useEffect(() => {
      getCommentInfo(id).then(x => setComment(x));
    },[]);
  return (
    <>
    {(comment!=null) && <DisplayComment comment={comment}/>}
    </>
  )
}
