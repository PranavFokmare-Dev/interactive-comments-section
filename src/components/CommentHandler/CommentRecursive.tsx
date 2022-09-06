import React from "react";
import { userContext } from "../../App";

import { useReplyHook } from "../../hooks/replyHook";
import { GridProps } from "../../Models/GridModel";
import CommentStateHandler from "../Comment/CommentStateHandler";
import * as S from "./MyComment.styled";


export const CommentRecursive = React.memo(function CommentRecursive({
    commentId,
    level,
  }: {
    commentId: number;
    level: number;
  }) {
    const user = React.useContext(userContext);
    const verticalLines: React.ReactElement[] = [];
    for (let i = 0; i < level; i++) {
      verticalLines.push(
        <S.GridItem $colStart={i + 1} $colEnd={i + 2}>
          <S.VerticalLine />
        </S.GridItem>
      );
    }
  
    const { replies, insertReply } = useReplyHook(commentId, user);
    return (
      <>
        {verticalLines.map((x) => x)}
        <S.GridItem $colStart={level + 1} $colEnd={GridProps.lastColGridLine}>
          <CommentStateHandler id={commentId} insertReply={insertReply} />
        </S.GridItem>
        {replies.map((x) => {
          return <CommentRecursive key = {x} commentId={x} level={level + 1} />;
        })}
      </>
    );
  }

);
  