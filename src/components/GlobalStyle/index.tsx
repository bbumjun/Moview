import { createGlobalStyle } from "styled-components";
import reset from "minireset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${({ theme }) => `
  html,body {
    min-height:100vh;
  }
  `}
`;

export default GlobalStyle;
