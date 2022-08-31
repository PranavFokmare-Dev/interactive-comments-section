import React, { useContext, useState } from "react";

import { IComment } from "../../Models/CommentModel";
import * as S from "./DisplayComment.styled";
import plusIcon from "../../images/icon-plus.svg";
import minusIcon from "../../images/icon-minus.svg";
import replyIcon from "../../images/icon-reply.svg";
import deleteIcon from "../../images/icon-delete.svg";
import editIcon from "../../images/icon-edit.svg";
import { commentContext } from "../Comment/CommentStateHandler";
import AddCommentForm from "../AddComment/AddCommentForm";
import { userContext } from "../CommentHandler/MyComment";
interface CommentProps {
  comment: IComment;
}
export default function DisplayComment({ comment }: CommentProps) {
  const [showAddReplyModal, setShowAddReplyModal] = useState<boolean>(false);
  const user = useContext(userContext);
  const cv = useContext(commentContext);
  return (
    <>
      <S.CommentContainer>
        <Like score={comment.score} />
        <CommentContent
          comment={comment}
          toggleAddReply={() => {
            setShowAddReplyModal(!showAddReplyModal);
          }}
        />
      </S.CommentContainer>
      {showAddReplyModal && user != null && cv != null && (
        <AddCommentForm
          user={user}
          insertComment={(reply: string) => {
            cv.insertReply(reply);
            setShowAddReplyModal(false);
          }}
          buttonName="REPLY"
        />
      )}
    </>
  );
}

function Like({ score }: { score: number }) {
  const cVal = useContext(commentContext);
  return (
    <S.Likes>
      <S.Icon
        src={plusIcon}
        alt="plus"
        onClick={() => {
          cVal?.changeLikes(1);
        }}
      />
      {score}
      <S.Icon
        src={minusIcon}
        alt="minus"
        onClick={() => {
          cVal?.changeLikes(-1);
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
            {isCurrentUserComment && <div id="youIcon">you</div>}
            <div id="createdAt">{comment.createdAt}</div>
          </S.CommentMetaData>
          <S.RightHead>
            {isCurrentUserComment && (
              <S.IconContainer $color={"rgb(228,112,123)"}>
                <S.IconHoverOpaq>
                  <img src={deleteIcon} alt="delete" />
                  <b>Delete</b>
                </S.IconHoverOpaq>
              </S.IconContainer>
            )}
            {isCurrentUserComment && (
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
      <textarea onChange = {(e)=>setEditComment(e.target.value)} value = {editComment}>
      </textarea>
      <button onClick = {()=>{cv?.updateComment(editComment); callback();}}>Update</button>
      </>
      
    )

}


