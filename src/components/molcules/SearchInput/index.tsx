import * as React from "react";
import { InputProps } from "src/components/atoms/Input";
import * as S from "./style";

export interface SearchInputProps {
  labelName: string | React.ReactNode;
  inputProps: InputProps;
}

const SearchInput: React.FC<SearchInputProps> = ({ labelName, inputProps }) => {
  return (
    <S.Container>
      <S.Label>
        {labelName}
        <S.StyledInput {...inputProps} />
      </S.Label>
    </S.Container>
  );
};
export default SearchInput;
