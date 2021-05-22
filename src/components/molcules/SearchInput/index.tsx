import React, { useState, ChangeEvent, Suspense } from "react";
import * as S from "./style";
import searchIcon from "images/search.png";
import { useRecoilValue } from "recoil";
import { searchInputState } from "store/header";
const SearchedList = React.lazy(
  () => import("components/molcules/SearchedList")
);
export interface SearchInputProps {
  placeholder: string;
  inputName: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  inputName,
  handleInputChange,
  className = "",
}) => {
  const inputValue = useRecoilValue(searchInputState);
  const [isFocused, setFocused] = useState(false);
  const handleInputFocusIn = () => {
    setFocused(true);
  };
  const handleInputFocusOut = () => {
    setFocused(false);
  };
  return (
    <S.Container onFocus={handleInputFocusIn} onBlur={handleInputFocusOut}>
      <S.InputContainer className={className}>
        <S.Label>
          <S.StyledIcon alt="search" src={searchIcon} height={1} />
          <S.StyledInput
            value={inputValue}
            placeholder={placeholder}
            inputName={inputName}
            handleInputChange={handleInputChange}
          />
        </S.Label>
      </S.InputContainer>
      <Suspense fallback={<></>}>{isFocused && <SearchedList />}</Suspense>
    </S.Container>
  );
};
export default SearchInput;
