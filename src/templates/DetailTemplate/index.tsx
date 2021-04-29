import React from "react";
import * as S from "./style";
export interface DetailTemplateProps {
  profile: React.ReactNode;
}
const DetailTemplate: React.FC<DetailTemplateProps> = ({
  children,
  profile,
}) => {
  return (
    <S.Container>
      <S.Profile>{profile}</S.Profile>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default DetailTemplate;
