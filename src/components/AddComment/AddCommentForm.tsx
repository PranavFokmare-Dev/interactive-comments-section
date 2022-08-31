import React, { useState } from "react";

import * as S from "./AddCommentForm.styled";
import { IUser } from "../../Models/UserModel";
import { Spinner } from "../utilities/Spinner";
interface AddCommentFormProps {
  user: IUser;
  insertComment: (content: string) => Promise<void>;
  buttonName:string;
}
export default function AddCommentForm({
  user,
  insertComment,
  buttonName
}: AddCommentFormProps) {
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
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
        disabled = {loading}
      ></textarea>
      <div className="button">
        <button disabled = {loading}
          onClick={async () => {
            setLoading(true);
            await insertComment(comment);
            setLoading(false);
            setComment("");
          }}
        >
          <b>{buttonName}</b>
        </button>
      </div>
      
    </S.AddReply>
    {loading && <Spinner/> }
    </>
    
  );
}
