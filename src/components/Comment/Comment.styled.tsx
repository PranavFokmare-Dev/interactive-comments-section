import styled from 'styled-components';

export const CommentContainer = styled.div`
    display:flex;
    padding:1em;
    background-color:white;
    gap:1em;
    align-items:flex-start;
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
`
export const CommentContent = styled.div`
    flex-grow:1;
`