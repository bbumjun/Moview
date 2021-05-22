import React, { ChangeEvent } from "react";
import * as S from "./style";
export interface InputProps {
  value: string;
  placeholder: string;
  inputName: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  handleInputChange,
  inputName,
  className = "",
}) => (
  <S.Input
    type="text"
    value={value}
    name={inputName}
    placeholder={placeholder}
    onChange={handleInputChange}
    className={className}
    autoComplete="off"
  />
);

export default Input;
