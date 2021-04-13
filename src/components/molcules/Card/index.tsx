import React from "react";
import * as S from "./style";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import AspectRatio from "components/atoms/AspectRatio";
export interface CardProps {
  category: string;
  title: string;
  imgSrc: string;
  date: string;
  rate: number;
  index: number;
  id: number;
  voteCount: number;
}
const Card: React.FC<CardProps> = ({
  title,
  imgSrc,
  date,
  rate,
  index,
  voteCount,
}) => {
  return (
    <S.CardContainer>
      <S.LinkWrapper to="/">
        <S.ImageWrapper>
          <AspectRatio ratio={0.67}>
            <Image src={imgSrc} alt={title} index={index} />
          </AspectRatio>
        </S.ImageWrapper>
        <Text fontSize={1.2} fontWeight={900}>
          {title}
        </Text>
        <Text fontWeight={300}>{date.replace(/-/g, ".")}</Text>
        <Text>⭐{voteCount == 0 ? "평가 없음" : rate}</Text>
      </S.LinkWrapper>
    </S.CardContainer>
  );
};
export default Card;
