import React from "react";
import * as S from "./style";

export interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  hidden?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = null,
  className = null,
  hidden = false,
  active = false,
}) => (
  <S.Button
    onClick={onClick}
    className={className}
    hidden={hidden}
    active={active}
  >
    {children}
  </S.Button>
);

export default React.memo(Button);
