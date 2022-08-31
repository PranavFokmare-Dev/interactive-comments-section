import styled from 'styled-components';
import { btn, textarea } from '../AddComment/AddCommentForm.styled';

export const CommentContainer = styled.div`
    display:flex;
    padding:2em 1em;
    background-color:white;
    gap:1em;
    align-items:flex-start;
    border-radius:10px;
    margin-top:2em;
`
export const Likes = styled.div `
    display:flex;
    flex-direction:column;
    background-color:#ecf0f3;
    border-radius:7px;
    gap:0.75em;
    padding:0.5em 0.4em;
    align-items:center;
    color:rgb(93,96,175);
    font-weight:bold;
`
export const Icon = styled.img`
    width:0.7em;
    cursor: pointer;
`
export const CommentMainContent = styled.div`
    flex-grow:1;
    & > .comment{
        color: rgb(110,113,118);
    }
`
export const CommentHeadder = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
`
export const CommentMetaData = styled.div`
    display:flex;
    gap:1em;
    &>#createdAt{
        color:grey;
    }
    & #youIcon{ 
        color:white;
        background-color:rgb(93,96,175);
        padding:0em 0.5em;
        height:1.75em;
        font-weight:bold;
    }
`
export const UserIcon = styled.img`
    height:2em;
`
export const RightHead = styled.div`
    display:flex;
    gap:0.5em;
`
interface IconContainerProps {
    $color?:string;
}
export const IconContainer = styled.div`
    color:rgb(93,96,175);
    color:${(props:IconContainerProps)=>{
        return `${props.$color};`
    }};
    cursor: pointer;
    & img{
        padding-right:0.3em;
    }
`
export const IconHoverOpaq = styled.div`
        &:hover{
            opacity:0.5;
        }
`



export const AddReply = styled.div`
    background-color:white;
    display:flex;
    gap:2em; 
    margin-top:2em;
    padding:2em 1em;
    & > textarea{
        flex-grow:1;
        height:100px;
        border:1px solid black;
        border-radius:10px;

    }
`
export const EditTextArea = styled.textarea`
    ${textarea}
    width:100%;
`
export const EditButton = styled.div`
    & > .button  button{
       ${btn}
       font-weight:bold;
       }`;