import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import leftArrow from "images/left-arrow.svg";
import rightArrow from "images/right-arrow.svg";
import { contentTypeState } from "store/header";
import { useRecoilValue } from "recoil";
export interface ICardList {
  contentTitle: string;
  wrap?: boolean;
  titleFontSize?: number;
  items: React.ReactNode;
}
const CardList: React.FC<ICardList> = ({
  contentTitle,
  wrap = false,
  titleFontSize = 1.5,
  items,
}) => {
  const containerRef = useRef<HTMLUListElement>();
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const contentType = useRecoilValue(contentTypeState);
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const resizeListener = () => {
      setContainerWidth(containerRef.current?.offsetWidth);
      setTotalPage(
        Math.ceil(
          containerRef.current?.scrollWidth / containerRef.current?.offsetWidth
        ) - 1
      );
    };

    const observer = new ResizeObserver(resizeListener);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [contentType]);

  useEffect(() => {
    function moveScroll() {
      containerRef.current.scrollTo({
        left: currentPage * containerWidth,
        top: 0,
        behavior: "smooth",
      });
    }
    moveScroll();
  }, [currentPage, containerWidth]);

  const handlePageToLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageToRight = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <S.Wrapper>
      <S.Title fontSize={titleFontSize} fontWeight={700}>
        {contentTitle}
      </S.Title>
      <S.ContentListContainer
        ref={containerRef}
        $wrap={wrap}
        role="cardsContainer"
      >
        {items}
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

export default CardList;
