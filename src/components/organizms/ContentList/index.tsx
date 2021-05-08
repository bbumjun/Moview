import React from "react";
import * as S from "./style";
import ContentCard from "components/molcules/ContentCard";
import Text from "components/atoms/Text";
import useSlider from "hooks/useSlider";
import { smallImgUrl } from "common/url";
import { getHalfAndRounded } from "common/utils";
import leftArrow from "images/left-arrow.svg";
import rightArrow from "images/right-arrow.svg";
import useContentList from "hooks/useContentList";
export interface ContentListProps {
  contentTitle: string;
  contentType: "movie" | "tv";
  url: string;
  params?: Object;
  wrap?: boolean;
  titleFontSize?: number;
}

const ContentList: React.FC<ContentListProps> = ({
  contentTitle,
  contentType,
  params = null,
  url,
  wrap = false,
  titleFontSize = 1.5,
}) => {
  const { contents } = useContentList(url, params);
  const {
    containerRef,
    handlePageToLeft,
    handlePageToRight,
    currentPage,
    totalPage,
  } = useSlider();
  return (
    <S.Wrapper>
      <Text fontSize={titleFontSize} fontWeight={700}>
        {contentTitle}
      </Text>
      <S.ContentListContainer
        ref={containerRef}
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
              wrap={wrap}
            />
          );
        })}
        {contents.length == 0 && "아직 등록된 작품이 없습니다."}
      </S.ContentListContainer>
      <S.LeftButton onClick={handlePageToLeft} hidden={currentPage === 0}>
        <S.StyledIcon src={leftArrow} alt="previous cards" height={1} />
      </S.LeftButton>
      <S.RightButton
        onClick={handlePageToRight}
        hidden={currentPage === totalPage}
      >
        <S.StyledIcon src={rightArrow} alt="next cards" height={1} />
      </S.RightButton>
    </S.Wrapper>
  );
};

export default ContentList;
