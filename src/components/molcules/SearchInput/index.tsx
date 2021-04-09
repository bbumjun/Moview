import * as React from "react";
import { InputProps } from "src/components/atoms/Input";
import * as S from "./style";
import Icon from "../../atoms/Icon";
export interface SearchInputProps {
  inputProps: InputProps;
}

const SearchInput: React.FC<SearchInputProps> = ({ inputProps }) => {
  return (
    <S.Container>
      <S.Label>
        <Icon alt="search" src="search.png" height={1} />
        <S.StyledInput {...inputProps} />
      </S.Label>
    </S.Container>
  );
};
export default SearchInput;
