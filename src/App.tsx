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
  return (
    <AppContainer>
      <GlobalStyle />
      <MyComment/>
    </AppContainer>
  );
}

export default App;
