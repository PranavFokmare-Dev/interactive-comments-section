import styled from 'styled-components';

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
`
export const UserIcon = styled.img`
    height:2em;
`
export const Reply = styled.div`
    color:rgb(134,132,205);
    cursor: pointer;
    &> img{
        padding-right:0.3em;
    }
`