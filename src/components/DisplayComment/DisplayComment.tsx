import React, { useContext, useEffect, useState } from "react";

import { IComment } from "../../Models/CommentModel";
import * as S from "./DisplayComment.styled";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import replyIcon from "../../images/icon-reply.svg";
import { commentContext } from "../Comment/CommentStateHandler";
interface CommentProps {
  comment: IComment;
}
export default function DisplayComment({ comment }: CommentProps) {
  const [showAddReplyModal, setShowAddReplyModal]= useState<boolean>(false);
  return (
    <>
    <S.CommentContainer>
      <Like score={comment.score} />
      <CommentContent comment={comment} toggleAddReply = {()=>{setShowAddReplyModal(!showAddReplyModal)}} />
    </S.CommentContainer>
    {
      showAddReplyModal &&
      <S.AddReply>
                <div>
            <S.UserIcon
              alt="user-icon"
              src={require(`../../images/avatars/${comment.user.image.png}`)}
            />
          </div>
          <textarea></textarea>
          <div>
            <button>Reply</button>
          </div>
    </S.AddReply>
}</>
    
  );
}

function Like({ score }: { score: number }) {
  const cVal = useContext(commentContext);
  return (
    <S.Likes>
      <S.Icon src={plusIcon} alt="plus" onClick = {()=>{
        cVal?.changeLikes(1);
      }}/>
      {score}
      <S.Icon src={minusIcon} alt="minus" onClick ={()=>{
        cVal?.changeLikes(-1);
      }} />
    </S.Likes>
  );
}

function CommentContent({ comment, toggleAddReply }: { comment: IComment, toggleAddReply:()=>void }) {

  return (
    <>

    <S.CommentMainContent>
      <S.CommentHeadder>
        <S.CommentMetaData>
          <div>
            <S.UserIcon
              alt="user-icon"
              src={require(`../../images/avatars/${comment.user.image.png}`)}
            />
          </div>
          <div>
            <b>{comment.user.username}</b>
          </div>
          <div id="createdAt">{comment.createdAt}</div>
        </S.CommentMetaData>
        <S.Reply onClick = {()=>{toggleAddReply()}}>
          <img src={replyIcon} alt="reply-icon"  />
          <b>Reply</b>
        </S.Reply>
      </S.CommentHeadder>
      <div className="comment">{comment.content}</div>
    </S.CommentMainContent>

    </>
  );
}
