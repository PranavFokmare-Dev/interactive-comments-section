import styled from "styled-components";

import { GlobalStyle } from "./GlobalSyles";
import { IComment } from "./Models/CommentModel";
import MyComment from "./components/CommentHandler/MyComment";
import { IUser } from "./Models/UserModel";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "./service/userImage";

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:800px;
  margin:auto;

  min-height:100vh;
`
export const userContext = React.createContext<IUser | null>(null);
function App() {
  const [user,setUser] = useState<IUser|null>(null);
  useEffect(()=>{
    getUserInfo().then(u => setUser(u));
  },[]);
  return (
    <userContext.Provider  value = {user}>
    <AppContainer>
      <GlobalStyle />
      <MyComment/>
    </AppContainer>
    </userContext.Provider>

  );
}

export default App;
