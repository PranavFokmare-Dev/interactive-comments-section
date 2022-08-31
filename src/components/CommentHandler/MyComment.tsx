/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { userContext } from "../../App";

import { useCommentHook } from "../../hooks/commentHook";
import { ResponseStatus } from "../../Models/ApiResponse";
import { GridProps } from "../../Models/GridModel";
import AddCommentForm from "../AddComment/AddCommentForm";
import { Spinner } from "../utilities/Spinner";
import { CommentRecursive } from "./CommentRecursive";
import * as S from "./MyComment.styled";


export default function MyComment() {
 
  return (
    <>
      <ShowNewComments/>
      <ShowOldComments/>
    </>
  );
}
function ShowNewComments(){
  const user = useContext(userContext);
  const { commentIds,insertComment } = useCommentHook({user,shouldFetchComments:true});

  return (
    <>
      <S.Grid cols={GridProps.gridCols}>
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
      </S.Grid>
    </>
  );
}
function ShowOldComments(){
  const user = useContext(userContext);
  const { commentIds, fetchComments, status} = useCommentHook({user,shouldFetchComments:true});
  useEffect(()=>{
    fetchComments();
  },[]);
  if(status === ResponseStatus.loading)
  return <Spinner/> 
  return (
    <>
      <S.Grid cols={GridProps.gridCols}>
          {commentIds.map((ci) => (
            <CommentRecursive key={ci} commentId={ci} level={0} />
          ))}
      </S.Grid>
    </>
  );
}