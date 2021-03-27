import React from "react";
import * as S from "./style";

export interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick = null }) => (
  <S.Button onClick={onClick}>{children}</S.Button>
);

export default Button;
