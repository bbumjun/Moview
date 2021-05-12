import React from "react";
import * as S from "./style";
import Text from "components/atoms/Text";
import theme from "common/theme";
import { IContent, IContentList } from "types";
export interface FilteredTextListProps {
  items: IContentList;
}
const FilteredTextList = ({ items }: FilteredTextListProps) => {
  return (
    <S.FilteredTextContainer>
      <Text padding="0.5rem" fontWeight={500} color={theme.colors.red}>
        연관 검색어
      </Text>
      <S.filteredTextList>
        {items.slice(0, 10).map((item: IContent) => (
          <S.filterdTextItem key={item.id}>
            <Text>{item.title ?? item.name}</Text>
          </S.filterdTextItem>
        ))}
      </S.filteredTextList>
    </S.FilteredTextContainer>
  );
};
export default FilteredTextList;
