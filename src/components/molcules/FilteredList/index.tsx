import React, { Suspense } from "react";
import * as S from "./style";
import Text from "components/atoms/Text";
import theme from "common/theme";
import { IContent, IContentList } from "types";
import FilteredItem from "components/molcules/FilteredItem";
import ErrorBoundary from "components/atoms/ErrorBoundary";
import Loader from "components/atoms/Loader";
export interface FilteredTextListProps {
  items: IContentList;
}
const FilteredTextList = ({ items }: FilteredTextListProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<></>}>
        <S.FilteredTextContainer>
          <Text padding="0.5rem" fontWeight={500} color={theme.colors.red}>
            연관 검색어
          </Text>
          <S.filteredTextList>
            {items.map((item: IContent) => (
              <S.filterdTextItem key={item.id}>
                <FilteredItem data={item} />
              </S.filterdTextItem>
            ))}
          </S.filteredTextList>
        </S.FilteredTextContainer>
      </Suspense>
    </ErrorBoundary>
  );
};
export default FilteredTextList;
