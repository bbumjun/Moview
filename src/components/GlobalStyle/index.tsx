import { createGlobalStyle } from "styled-components";
import reset from "minireset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${({ theme }) => `

  `}
  html,body {
    font-family: 'Noto Sans KR','Oxygen', sans-serif;
  }
  a {
    text-decoration : none;
  }
  button,input {
    border:none;
  }
`;

export default GlobalStyle;
