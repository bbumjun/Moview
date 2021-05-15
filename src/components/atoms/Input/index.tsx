import React, { ChangeEvent } from "react";
import * as S from "./style";
export interface InputProps {
  value: string;
  placeholder: string;
  inputName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  inputName,
  className = "",
  inputRef,
}) => (
  <S.Input
    type="text"
    value={value}
    name={inputName}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
    autoComplete="off"
    ref={inputRef}
  />
);

export default Input;
