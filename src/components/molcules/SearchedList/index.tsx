import React, { useState, useEffect } from "react";
import * as S from "./style";
import Text from "components/atoms/Text";
import theme from "common/theme";
import { IContent, IContentList } from "types";
import SearchedItem from "components/molcules/SearchedItem";
import useSwr from "swr";
import { fetcherWithParams } from "common/requests";
import { useRecoilState } from "recoil";
import { searchInputState } from "store/header";

const SearchedList = () => {
  const [inputValue, setInputValue] = useRecoilState(searchInputState);
  const [filteredItems, setFilteredItems] = useState([]);
  const handleItemClick = () => {
    setInputValue("");
  };

  const { data } = useSwr<{ results: IContentList }>(
    inputValue.trim() ? ["search/multi", inputValue.trim()] : null,
    (url, value) => fetcherWithParams(url, { query: value }),
    { suspense: true }
  );

  const filterSearchResults = (items: IContentList) => {
    return items.filter((item) => {
      if (item.genre_ids === undefined || item.release_date === undefined)
        return false;
      return true;
    });
  };

  useEffect(() => {
    if (!data) return;
    setFilteredItems(filterSearchResults(data.results));
  }, [data]);

  return (
    <>
      {inputValue.trim() && (
        <S.Container>
          <Text padding="0.5rem" fontWeight={500} color={theme.colors.red}>
            연관 검색어
          </Text>
          <S.List onClick={handleItemClick}>
            {filteredItems.map((item: IContent) => (
              <S.Item key={item.id}>
                <SearchedItem data={item} />
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      )}
    </>
  );
};
export default SearchedList;
