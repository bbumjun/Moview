import React, { Suspense } from "react";
import * as S from "./style";
import Text from "components/atoms/Text";
import theme from "common/theme";
import { IContent, IContentList } from "types";
import SearchedItem from "components/molcules/SearchedItem";
import ErrorBoundary from "components/atoms/ErrorBoundary";
export interface SearchedListProps {
  items: IContentList;
}
const SearchedList = ({ items }: SearchedListProps) => {
  const filteredItems = items.filter((item) => {
    if (item.genre_ids === undefined || item.release_date === undefined)
      return false;
    return true;
  });
  return (
    <ErrorBoundary>
      <Suspense fallback={<></>}>
        <S.Container>
          <Text padding="0.5rem" fontWeight={500} color={theme.colors.red}>
            연관 검색어
          </Text>
          <S.List>
            {filteredItems.map((item: IContent) => (
              <S.Item key={item.id}>
                <SearchedItem data={item} />
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </Suspense>
    </ErrorBoundary>
  );
};
export default SearchedList;
