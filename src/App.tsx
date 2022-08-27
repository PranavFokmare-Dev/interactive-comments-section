import styled from "styled-components";

import { GlobalStyle } from "./GlobalSyles";
import { IComment } from "./Models/CommentModel";
import MyComment from "./components/CommentHandler/MyComment";

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:800px;
  margin:auto;

  min-height:100vh;
`

function App() {
  const comment : IComment = {
    id: 1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    replyingTo:-1,
    isAReply:false,
    user: {
      image: { 
        png: "images/avatars/image-amyrobson.png",
        webp: "images/avatars/image-amyrobson.webp"
      },
      username: "amyrobson"
    },
    replies: []
  };
  return (
    <AppContainer>
      <GlobalStyle />
      <MyComment/>
    </AppContainer>
  );
}

export default App;
