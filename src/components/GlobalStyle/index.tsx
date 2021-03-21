import { createGlobalStyle } from "styled-components";
import reset from "minireset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${({ theme }) => `
  html,body {
    min-height:100vh;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Oxygen', sans-serif;
  }
  `}
`;

export default GlobalStyle;
