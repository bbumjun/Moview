import React from "react";
import * as S from "./style";
import CastCard, { ICastCard } from "components/molcules/CastCard";
import useSlider from "hooks/useSlider";
import Icon from "components/atoms/Icon";
import leftArrow from "images/left-arrow.svg";
import rightArrow from "images/right-arrow.svg";
import Text from "components/atoms/Text";
interface ICastCardWithId extends ICastCard {
  id: number;
}
export interface ICastList {
  castCards: ICastCardWithId[];
}
const CastList: React.FC<ICastList> = ({ castCards }) => {
  const {
    cardsContainerRef,
    handleLeftSlide,
    handleRightSlide,
    leftBtnHidden,
    rightBtnHidden,
  } = useSlider();
  return (
    <S.Wrapper>
      <Text fontWeight={700} fontSize={1.2} padding="1rem 0">
        주요 출연진
      </Text>
      <S.Container ref={cardsContainerRef}>
        {castCards.map((data) => (
          <S.Item key={data.id}>
            <CastCard
              profile_path={data.profile_path}
              name={data.name}
              character={data.character}
            />
          </S.Item>
        ))}
        <S.LeftButton onClick={handleLeftSlide} hidden={leftBtnHidden}>
          <Icon src={leftArrow} alt="previous cards" height={1} />
        </S.LeftButton>
        <S.RightButton onClick={handleRightSlide} hidden={rightBtnHidden}>
          <Icon src={rightArrow} alt="next cards" height={1} />
        </S.RightButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default CastList;
