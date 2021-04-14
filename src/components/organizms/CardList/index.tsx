import * as React from "react";
import * as S from "./style";
import Card from "components/molcules/Card";
import useCardListData, { paramsType } from "hooks/useCardListData";
import Text from "components/atoms/Text";

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

  const { useState, useEffect, useCallback } = React;
  const totalPage = 3;
  const [cardsContainerNode, setCardsContainerNode] = useState(null);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [leftBtnHidden, setLeftBtnHidden] = useState(false);
  const [rightBtnHidden, setRightBtnHidden] = useState(false);
  const [windowSize, setWindowSize] = useState(null);
  const cardsContainerRef = useCallback(
    (node) => {
      if (!node) return;
      const { offsetWidth } = node;
      setCardsContainerNode(node);
      setOffset(offsetWidth);
    },
    [windowSize]
  );

  const handleLeftSlide = () => {
    setPage(page - 1);
  };

  const handleRightSlide = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!cardsContainerNode) {
      return;
    }
    cardsContainerNode.scrollTo(page * offset, 0);
    setLeftBtnHidden(page == 0 ? true : false);
    setRightBtnHidden(page == totalPage ? true : false);
  }, [page, offset]);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <Card
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
