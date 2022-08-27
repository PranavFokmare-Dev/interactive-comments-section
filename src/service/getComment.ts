import { IComment } from "../Models/CommentModel";

const data:IComment[] = [];

/*JSON.parse(`
[
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "replyingTo:-1,
      "isAReply":false,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,      
      "replyingTo:-1,
      "isAReply":false,
      "user": {
        "image": { 
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo:2,
          "isAReply":true,
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo:2,
          "isAReply":true,
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
`);
*/
data.push({
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
        id: 13,
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
            id: 103,
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
              id: 104,
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
                id: 105,
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
                  id: 106,
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
                    id: 107,
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
                      id: 108,
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
        id: 109,
        content:
          "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        createdAt: "2 days ago",
        score: 2,
        replyingTo: -1,
        isAReply: false,
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
  });
export async function getComments():Promise<number[]>{
    return data.map(c => c.id);
}

export async function getCommentInfo(id:number):Promise<IComment|null>{
    const x = data.find(x => x.id  === id);
    console.log("ID",id);
    console.log(x);
    return (x===undefined)?null:x;
}

export async function getReplyIdsForComment(id:number):Promise<number[]>{
  const comment = data.find(x => x.id  === id);
  if(comment===undefined){
    return [];
  }
  return comment.replies.map(x => x.id);
}