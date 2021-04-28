import React from "react";
import * as S from "./style";
export interface MainTemplateProps {}
const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);
export default MainTemplate;
