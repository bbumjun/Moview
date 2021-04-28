import * as React from "react";
import * as S from "./style";
import ContentCard from "components/molcules/ContentCard";
import Text from "components/atoms/Text";
import useSlider from "hooks/useSlider";
import { smallImgUrl } from "common/url";
import { getHalfAndRounded } from "common/utils";
import { IContent } from "types";
import leftArrow from "images/left-arrow.svg";
import rightArrow from "images/right-arrow.svg";
export type paramsType = {
  sort_by?: string;
  with_original_language?: string;
  page?: number;
  "release_date.lte"?: string;
  "vote_count.gte"?: number;
};

export interface ContentListProps {
  contentTitle: string;
  contentType: "movie" | "tv";
  contents: IContent[];
}

const ContentList: React.FC<ContentListProps> = ({
  contentTitle,
  contents,
  contentType,
}) => {
  const {
    cardsContainerRef,
    handleLeftSlide,
    handleRightSlide,
    leftBtnHidden,
    rightBtnHidden,
  } = useSlider();

  return (
    <S.Wrapper>
      <Text fontSize={1.5} fontWeight={700}>
        {contentTitle}
      </Text>
      <S.ContentListContainer ref={cardsContainerRef} role="cardsContainer">
        {contents.map((content, index) => {
          const title = content.title ?? content.name;
          const imgSrc = smallImgUrl + content.poster_path;
          const date = content.release_date ?? content.first_air_date;
          const rate = getHalfAndRounded(content.vote_average);
          const voteCount = content.vote_count;
          return (
            <ContentCard
              contentType={contentType}
              key={content.id}
              index={index}
              title={title}
              imgSrc={imgSrc}
              date={date}
              rate={rate}
              voteCount={voteCount}
              id={content.id}
            />
          );
        })}
      </S.ContentListContainer>
      <S.LeftButton onClick={handleLeftSlide} hidden={leftBtnHidden}>
        <S.StyledIcon src={leftArrow} alt="previous cards" height={1} />
      </S.LeftButton>
      <S.RightButton onClick={handleRightSlide} hidden={rightBtnHidden}>
        <S.StyledIcon src={rightArrow} alt="next cards" height={1} />
      </S.RightButton>
    </S.Wrapper>
  );
};

export default ContentList;
