import React from "react";

import { IComment } from "../../Models/CommentModel";
import DisplayComment from "../DisplayComment/DisplayComment";
import * as S from "./MyComment.styled";

const gridCols = 50;
const lastColGridLine = gridCols+1;

export default function MyComment() {
  const comment: IComment = {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    user: {
      image: {
        png: "images/avatars/image-amyrobson.png",
        webp: "images/avatars/image-amyrobson.webp",
      },
      username: "amyrobson",
    },
    replyingTo: -1,
    isAReply: false,
    replies: [
      {
        id: 3,
        content:
          "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        createdAt: "1 week ago",
        score: 4,
        replyingTo: 1,
        isAReply: true,
        user: {
          image: {
            png: "images/avatars/image-ramsesmiron.png",
            webp: "images/avatars/image-ramsesmiron.webp",
          },
          username: "ramsesmiron",
        },
        replies: [{
          id: 100,
          content:
            "test",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: 1,
          isAReply: true,
          user: {
            image: {
              png: "images/avatars/image-ramsesmiron.png",
              webp: "images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
          replies: [],
        },
        {
          id: 101,
          content:
            "test",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: 1,
          isAReply: true,
          user: {
            image: {
              png: "images/avatars/image-ramsesmiron.png",
              webp: "images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
          replies: [{
            id: 100,
            content:
              "test",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: 1,
            isAReply: true,
            user: {
              image: {
                png: "images/avatars/image-ramsesmiron.png",
                webp: "images/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
            replies: [{
              id: 100,
              content:
                "test",
              createdAt: "1 week ago",
              score: 4,
              replyingTo: 1,
              isAReply: true,
              user: {
                image: {
                  png: "images/avatars/image-ramsesmiron.png",
                  webp: "images/avatars/image-ramsesmiron.webp",
                },
                username: "ramsesmiron",
              },
              replies: [{
                id: 100,
                content:
                  "test",
                createdAt: "1 week ago",
                score: 4,
                replyingTo: 1,
                isAReply: true,
                user: {
                  image: {
                    png: "images/avatars/image-ramsesmiron.png",
                    webp: "images/avatars/image-ramsesmiron.webp",
                  },
                  username: "ramsesmiron",
                },
                replies: [{
                  id: 100,
                  content:
                    "test",
                  createdAt: "1 week ago",
                  score: 4,
                  replyingTo: 1,
                  isAReply: true,
                  user: {
                    image: {
                      png: "images/avatars/image-ramsesmiron.png",
                      webp: "images/avatars/image-ramsesmiron.webp",
                    },
                    username: "ramsesmiron",
                  },
                  replies: [{
                    id: 100,
                    content:
                      "test",
                    createdAt: "1 week ago",
                    score: 4,
                    replyingTo: 1,
                    isAReply: true,
                    user: {
                      image: {
                        png: "images/avatars/image-ramsesmiron.png",
                        webp: "images/avatars/image-ramsesmiron.webp",
                      },
                      username: "ramsesmiron",
                    },
                    replies: [{
                      id: 100,
                      content:
                        "test",
                      createdAt: "1 week ago",
                      score: 4,
                      replyingTo: 1,
                      isAReply: true,
                      user: {
                        image: {
                          png: "images/avatars/image-ramsesmiron.png",
                          webp: "images/avatars/image-ramsesmiron.webp",
                        },
                        username: "ramsesmiron",
                      },
                      replies: [],
                    }],
                  }],
                }],
              }],
            }],
          }],
        }],
      },
      {
        id: 4,
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: "2 days ago",
        score: 2,
        replyingTo: 1,
        isAReply: true,
        user: {
          image: {
            png: "images/avatars/image-juliusomo.png",
            webp: "images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
        replies: [],
      },
    ],
  };

  return (
    <>
      
      <S.Grid cols={gridCols}>
        <CommentRecursive comment={comment} level={0}/>
      </S.Grid>
    </>
  );
}
function CommentRecursive({comment,level}:{comment:IComment,level:number}){
  console.log(comment.id+" "+level);
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
  return (
    <>
    {verticalLines.map( x =>x)}
    <S.GridItem
    colStart={level+1}
    colEnd={lastColGridLine}
    rowStart= {null}
    rowEnd={null}>
      <DisplayComment comment={comment}/>
    </S.GridItem>
    {comment.replies.map(x => {
      return <CommentRecursive comment={x} level={level+1}/>;
    })}    
    </>
    
  )
}
