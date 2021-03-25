import React from "react";
import * as S from "./index.style";

export interface ButtonProps {
  children: React.ReactNode | string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => (
  <S.Button className={className}>{children}</S.Button>
);

export default Button;
