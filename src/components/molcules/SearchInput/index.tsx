import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import * as S from "./style";
import searchIcon from "images/search.png";
import FilteredTextList from "components/molcules/FilteredList";
import { fetcherWithParams } from "common/requests";
import useSwr from "swr";
import useActiveElement from "hooks/useActiveElement";
export interface SearchInputProps {
  value: string;
  placeholder: string;
  inputName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  inputName,
  onChange,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>();
  const focusedElement = useActiveElement();
  const [isFocused, setFocused] = useState(false);
  const { data } = useSwr(
    value.trim() ? ["search/multi", value] : null,
    (url, value) => fetcherWithParams(url, { query: value, region: "KR" })
  );
  useEffect(() => {
    setFocused(focusedElement === inputRef.current);
  }, [inputRef.current, focusedElement]);
  return (
    <S.Container>
      <S.InputContainer className={className}>
        <S.Label>
          <S.StyledIcon alt="search" src={searchIcon} height={1} />
          <S.StyledInput
            value={value}
            placeholder={placeholder}
            inputName={inputName}
            onChange={onChange}
            inputRef={inputRef}
          />
        </S.Label>
      </S.InputContainer>
      {isFocused && value.trim() && data && data.total_results !== 0 && (
        <FilteredTextList items={data.results} />
      )}
    </S.Container>
  );
};
export default SearchInput;
