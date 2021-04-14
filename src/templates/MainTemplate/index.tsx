import React from "react";
import * as S from "./style";
export interface MainTemplateProps {
  header: React.ReactNode;
  footer: React.ReactNode;
}
const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <S.Wrapper>
      <S.Header>{header}</S.Header>
      <S.Content>{children}</S.Content>
      <S.Footer>{footer}</S.Footer>
    </S.Wrapper>
  );
};

export default MainTemplate;
