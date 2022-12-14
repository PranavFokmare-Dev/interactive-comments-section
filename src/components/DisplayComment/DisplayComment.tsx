import React,{ Suspense, useContext, useState } from "react";

import { IComment } from "../../Models/CommentModel";
import * as S from "./DisplayComment.styled";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import replyIcon from "../../images/icon-reply.svg";
import deleteIcon from "../../images/icon-delete.svg";
import editIcon from "../../images/icon-edit.svg";
import { commentContext } from "../Comment/CommentStateHandler";
import { userContext } from "../../App";
interface CommentProps {
  comment: IComment;
}

const AddCommentForm = React.lazy(()=>import("../AddComment/AddCommentForm"))

export default function DisplayComment({ comment }: CommentProps) {
  const [showAddReplyModal, setShowAddReplyModal] = useState<boolean>(false);
  const user = useContext(userContext);
  const cv = useContext(commentContext);
  const isDeleted = (cv)?cv.isDeleted:false;
  return (
    <>
      <S.CommentContainer>
        {!isDeleted && <Like score={comment.score} />}
        <CommentContent
          comment={comment}
          toggleAddReply={() => {
            setShowAddReplyModal(!showAddReplyModal);
          }}
        />
      </S.CommentContainer>
      {showAddReplyModal && user != null && cv != null && (
        <Suspense fallback = {<div>....Loading</div>}>
          <AddCommentForm
          user={user}
          insertComment={async (reply: string) => {
            await cv.insertReply(reply);
            setShowAddReplyModal(false);
          }}
          buttonName="REPLY"
        />
        </Suspense>
        
      )}
    </>
  );
}

enum LikeEnum{
  like = "like",
  dislike="dislike",
  none = "none"
}
function Like({ score }: { score: number }) {
  const cVal = useContext(commentContext);
  const [liked, setLiked] = useState<LikeEnum>(LikeEnum.none);
  return (
    <S.Likes>
      <S.Icon
        src={plusIcon}
        alt="plus"
        onClick={() => {
          if(liked !== LikeEnum.like){
            cVal?.like();
            setLiked((liked === LikeEnum.dislike)?LikeEnum.none:LikeEnum.like);
          }

        }}
      />
      {score}
      <S.Icon
        src={minusIcon}
        alt="minus"
        onClick={() => {
          if(liked !== LikeEnum.dislike){
            cVal?.dislike();
            setLiked((liked === LikeEnum.like)?LikeEnum.none:LikeEnum.dislike);
          }
        }}
      />
    </S.Likes>
  );
}

function CommentContent({
  comment,
  toggleAddReply,
}: {
  comment: IComment;
  toggleAddReply: () => void;
}) {
  const cv = useContext(commentContext);
  const [isEditing,setIsEditing] = useState(false);
  const user = useContext(userContext);
  const isCurrentUserComment = user?.username === comment.user.username;
  const isDeleted = (cv)?cv.isDeleted:false;
  const showSection = isCurrentUserComment && !isDeleted;
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
            {showSection && <div id="youIcon">you</div>}
            <div id="createdAt">{comment.createdAt}</div>
          </S.CommentMetaData>
          <S.RightHead>
            {showSection && (
              <S.IconContainer $color={"rgb(228,112,123)"} onClick = {()=>{cv?.deleteComment()}}>
                <S.IconHoverOpaq>
                  <img src={deleteIcon} alt="delete" />
                  <b>Delete</b>
                </S.IconHoverOpaq>
              </S.IconContainer>
            )}
            {showSection && (
              <S.IconContainer onClick = {()=>{
                setIsEditing(true);
              }}>
                <S.IconHoverOpaq>
                  <img src={editIcon} alt="edit" />
                  <b>Edit</b>
                </S.IconHoverOpaq>
              </S.IconContainer>
            )}
            <S.IconContainer
              onClick={() => {
                toggleAddReply();
              }}
            >
              <S.IconHoverOpaq>
                <img src={replyIcon} alt="reply-icon" />
                <b>Reply</b>
              </S.IconHoverOpaq>
            </S.IconContainer>
          </S.RightHead>
        </S.CommentHeadder>
        {(isEditing)?<EditComment callback={()=>setIsEditing(false)}/>:<div className="comment">{comment.content}</div>}
      </S.CommentMainContent>
    </>
  );
}

function EditComment({callback}:{callback:()=>void}){
    const cv = useContext(commentContext);
    const startingComment = (cv!=null && cv.comment!=null)?cv.comment.content:"";
    const [editComment,setEditComment] = useState<string>(startingComment);
    return (
      <>
      <S.EditTextArea onChange = {(e)=>setEditComment(e.target.value)} value = {editComment}>
      </S.EditTextArea>
      <S.EditButton>
        <div className = "button">

        <button onClick = {()=>{cv?.updateComment(editComment); callback();}}>Update</button>
        </div>

        </S.EditButton>
      </>
      
    )

}


