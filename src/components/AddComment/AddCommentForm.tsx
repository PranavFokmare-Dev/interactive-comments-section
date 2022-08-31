import React, { useState } from "react";

import * as S from "./AddCommentForm.styled";
import { IUser } from "../../Models/UserModel";
interface AddCommentFormProps {
  user: IUser;
  insertComment: (content: string) => void;
  buttonName:string;
}
export default function AddCommentForm({
  user,
  insertComment,
  buttonName
}: AddCommentFormProps) {
  const [comment, setComment] = useState<string>("");
  return (
    <S.AddReply>
      <div>
        <S.UserIcon
          alt="user-icon"
          src={require(`../../images/avatars/${user.image.png}`)}
        />
      </div>
      <textarea
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      ></textarea>
      <div className="button">
        <button
          onClick={() => {
            insertComment(comment);
            setComment("");
          }}
        >
          <b>{buttonName}</b>
        </button>
      </div>
    </S.AddReply>
  );
}
