import React, { useState } from "react";

import { useCommentHook } from "../../hooks/commentHook";
import { GridProps } from "../../Models/GridModel";
import { IUser } from "../../Models/UserModel";
import AddCommentForm from "../AddComment/AddCommentForm";
import { CommentRecursive } from "./CommentRecursive";
import * as S from "./MyComment.styled";

export const userContext = React.createContext<IUser | null>(null);
export default function MyComment() {
  const [user, setUser] = useState<IUser | null>(null);
  const { commentIds, insertComment } = useCommentHook({ user, setUser });

  return (
    <>
      <S.Grid cols={GridProps.gridCols}>
        <userContext.Provider value={user}>
          {user != null && (
            <S.GridItem colStart={1} colEnd={GridProps.lastColGridLine}>
              <AddCommentForm
                user={user}
                insertComment={insertComment}
                buttonName="SEND"
              />
            </S.GridItem>
          )}
          {commentIds.map((ci) => (
            <CommentRecursive key={ci} commentId={ci} level={0} />
          ))}
        </userContext.Provider>
      </S.Grid>
    </>
  );
}
