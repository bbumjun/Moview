import React from "react";
import * as S from "./style";

export interface ButtonListProps {
  children: React.ReactNode[];
}

const ButtonList: React.FC<ButtonListProps> = ({ children }) => {
  return <S.ButtonList>{children}</S.ButtonList>;
};

export default ButtonList;
