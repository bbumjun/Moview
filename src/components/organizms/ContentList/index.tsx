import * as React from "react";
import * as S from "./style";
import ContentCard from "components/molcules/ContentCard";
import Text from "components/atoms/Text";
import useCardListData from "hooks/useCardListData";
import useSlider from "hooks/useSlider";
export type paramsType = {
  sort_by?: string;
  with_original_language?: string;
  page?: number;
  "release_date.lte"?: string;
  "vote_count.gte"?: number;
};

export interface CardListProps {
  category: string;
  contentTitle: string;
  params: paramsType;
}

const CardList: React.FC<CardListProps> = ({
  category,
  params,
  contentTitle,
}) => {
  const { data, loading } = useCardListData({
    category,
    params,
  });

  const {
    cardsContainerRef,
    handleLeftSlide,
    handleRightSlide,
    leftBtnHidden,
    rightBtnHidden,
  } = useSlider();
  return (
    <React.Fragment>
      {loading && <></>}
      {!loading && data && (
        <S.Wrapper>
          <Text fontSize={1.5} fontWeight={700}>
            {contentTitle}
          </Text>
          <S.CardListContainer ref={cardsContainerRef} role="cardsContainer">
            {data.map((item, index) => {
              return (
                <ContentCard
                  {...item}
                  category={category}
                  key={item.id}
                  index={index}
                />
              );
            })}
          </S.CardListContainer>
          <S.LeftButton onClick={handleLeftSlide} hidden={leftBtnHidden}>
            <S.StyledIcon
              src="left-arrow.svg"
              alt="previous cards"
              height={1}
            />
          </S.LeftButton>
          <S.RightButton onClick={handleRightSlide} hidden={rightBtnHidden}>
            <S.StyledIcon src="right-arrow.svg" alt="next cards" height={1} />
          </S.RightButton>
        </S.Wrapper>
      )}
    </React.Fragment>
  );
};

export default CardList;
