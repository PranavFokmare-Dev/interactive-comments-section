import React, { useEffect, useState } from "react";

import { IComment } from "../../Models/CommentModel";
import { getComments as getCommentIds, getReplyIdsForComment } from "../../service/getComment";
import CommentStateHandler from "../Comment/CommentStateHandler";
import DisplayComment from "../DisplayComment/DisplayComment";
import * as S from "./MyComment.styled";

const gridCols = 50;
const lastColGridLine = gridCols+1;

export default function MyComment() {
  const [commentIds, setCommentIds] = useState<number[]>([]);
  useEffect( () => {
    getCommentIds().then(x => 
      {
        console.log(x);
        setCommentIds(x)
      }
      );
  })
  

  return (
    <>
      
      <S.Grid cols={gridCols}>
        {
          commentIds.map(ci => <CommentRecursive key = {ci} commentId={ci} level={0}/>)
        }
        
      </S.Grid>
    </>
  );
}
function CommentRecursive({commentId,level}:{commentId:number,level:number}){
  
  const verticalLines:React.ReactElement[] = [];
  for(let i = 0; i<level;i++){
    verticalLines.push(
      <S.GridItem
      colStart={i+1}
      colEnd={i+2}
      rowStart={null}
      rowEnd={null}
    >
      <S.VerticalLine />
    </S.GridItem>
    )
  }

  const [replies,setReplies] = useState<number[]>([]);
  useEffect(
    ()=>{
      getReplyIdsForComment(commentId).then(x => setReplies(x));
    },[]
  );
  return (
    <>
    {verticalLines.map( x =>x)}
    <S.GridItem
    colStart={level+1}
    colEnd={lastColGridLine}
    rowStart= {null}
    rowEnd={null}>
      <CommentStateHandler id={commentId}/>
    </S.GridItem>
    {replies.map(x => {
      return <CommentRecursive commentId={x} level={level+1}/>;
    })}    
    </>
    
  )
}
