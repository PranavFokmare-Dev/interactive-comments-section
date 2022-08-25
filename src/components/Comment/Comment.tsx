import React from 'react'

import { IComment } from '../../Models/CommentModel';
import * as S from './Comment.styled';
import plusIcon from '../../images/icon-plus.svg';
import minusIcon from '../../images/icon-minus.svg';
interface CommentProps{
    comment:IComment
}
export default function Comment({comment}:CommentProps) {
    /*{
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      };*/


  return (
    <S.CommentContainer>
      <S.Likes>
        <S.Icon src = {plusIcon} alt = "plus"/>
        {comment.score}
        <S.Icon src = {minusIcon} alt ="minus"/>
      </S.Likes>
      <div>
        {comment.content}
      </div>
    </S.CommentContainer>
  )
}

