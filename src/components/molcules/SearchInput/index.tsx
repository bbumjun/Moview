import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import * as S from "./style";
import searchIcon from "images/search.png";
import SearchedList from "components/molcules/SearchedList";
import { fetcherWithParams } from "common/requests";
import useSwr from "swr";
import useActiveElement from "hooks/useActiveElement";
import { useRecoilValue } from "recoil";
import { searchInputState } from "store/header";
export interface SearchInputProps {
  placeholder: string;
  inputName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  inputName,
  onChange,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>();
  const inputValue = useRecoilValue(searchInputState);
  const { data } = useSwr(
    inputValue.trim() ? ["search/multi", inputValue] : null,
    (url, value) => fetcherWithParams(url, { query: value })
  );

  return (
    <S.Container>
      <S.InputContainer className={className}>
        <S.Label>
          <S.StyledIcon alt="search" src={searchIcon} height={1} />
          <S.StyledInput
            value={inputValue}
            placeholder={placeholder}
            inputName={inputName}
            onChange={onChange}
            inputRef={inputRef}
          />
        </S.Label>
      </S.InputContainer>
      {inputValue.trim() && data && data.total_results !== 0 && (
        <SearchedList items={data.results} />
      )}
    </S.Container>
  );
};
export default SearchInput;
