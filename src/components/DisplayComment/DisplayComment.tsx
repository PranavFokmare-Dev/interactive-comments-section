import React, { useEffect, useState } from "react";

import { IComment } from "../../Models/CommentModel";
import * as S from "./DisplayComment.styled";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import replyIcon from "../../images/icon-reply.svg";
interface CommentProps {
  comment: IComment;
}
export default function DisplayComment({ comment }: CommentProps) {
  return (
    <S.CommentContainer>
      <Like score={comment.score} />
      <CommentContent comment={comment} />
    </S.CommentContainer>
  );
}

function Like({ score }: { score: number }) {
  return (
    <S.Likes>
      <S.Icon src={plusIcon} alt="plus" />
      {score}
      <S.Icon src={minusIcon} alt="minus" />
    </S.Likes>
  );
}

function CommentContent({ comment }: { comment: IComment }) {
  return (
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
        <S.Reply>
          <img src={replyIcon} alt="reply-icon" />
          <b>Reply</b>
        </S.Reply>
      </S.CommentHeadder>
      <div className="comment">{comment.content}</div>
    </S.CommentMainContent>
  );
}
