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

export interface ContentListProps {
  contentTitle: string;
  contentType: "movie" | "tv";
  contents: IContent[];
  wrap?: boolean;
  titleFontSize?: number;
}

const ContentList: React.FC<ContentListProps> = ({
  contentTitle,
  contents,
  contentType,
  wrap = false,
  titleFontSize = 1.5,
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
      <Text fontSize={titleFontSize} fontWeight={700}>
        {contentTitle}
      </Text>
      <S.ContentListContainer
        ref={cardsContainerRef}
        $wrap={wrap}
        role="cardsContainer"
      >
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
        {contents.length == 0 && "아직 등록된 작품이 없습니다."}
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
