import React, { ChangeEvent } from "react";
import * as S from "./index.style";
export interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChange: () => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className = "",
}) => (
  <S.Input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
  />
);

export default Input;
