import * as React from "react";
import { InputProps } from "src/components/atoms/Input";
import * as S from "./style";
export interface SearchInputProps {
  inputProps: InputProps;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  inputProps,
  className = "",
}) => {
  return (
    <S.Container className={className}>
      <S.Label>
        <S.StyledIcon alt="search" src="search.png" height={1} />
        <S.StyledInput {...inputProps} />
      </S.Label>
    </S.Container>
  );
};
export default SearchInput;
