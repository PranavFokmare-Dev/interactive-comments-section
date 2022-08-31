import styled from "styled-components"
import {css} from "styled-components";
export const textarea = css`
     flex-grow:1;
        height:80px;
        border:1px solid black;
        border-radius:10px;
        padding:1em;
        border-color:rgb(237,238,242);
        resize:none;
        &:focus{
            border:1px solid black;
            outline:0px;
        }
`;
export const btn = css`
background-color:rgb(134,132,205);
        padding:1em 1.5em;
        color:white;
        border:0px;
        border-radius:5px;
        cursor:pointer;
        &:hover{
            background-color:rgb(196,197,241);
            color:rgb(252,254,255);
        }
`;


export const AddReply = styled.div`
    background-color:white;
    display:flex;
    gap:2em; 
    margin-top:2em;
    padding:2em 1em;
    border-radius:10px;
    & > textarea{
       ${textarea}
    }
    & > .button  button{
      ${btn}
    }
`

export const UserIcon = styled.img`
    height:2em;
`