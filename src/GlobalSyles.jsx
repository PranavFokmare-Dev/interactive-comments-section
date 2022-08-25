import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    *::before, *::after{
        box-sizing:border-box;
    }
`;