import { createGlobalStyle } from "styled-components";
import reset from "minireset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,body {
    font-family: 'Noto Sans KR','Oxygen', sans-serif;
    scroll-behavior: smooth;
  }
  a {
    text-decoration : none;
  }
  button,input {
    border:none;
  }
`;

export default GlobalStyle;
