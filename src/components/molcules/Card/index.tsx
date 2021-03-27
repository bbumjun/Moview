import React from "react";
import * as S from "./style";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
export interface CardProps {
  title: string;
  imgSrc: string;
  date: string;
  rate: number;
  index: number;
}
const Card: React.FC<CardProps> = ({ title, imgSrc, date, rate, index }) => {
  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <Image src={imgSrc} alt={title} index={index} />
      </S.ImageWrapper>
      <Text fontSize={1.2} fontWeight={900}>
        {title}
      </Text>
      <Text>개봉일: {date.replace(/-/g, ".")}</Text>
      <Text>⭐{rate}</Text>
    </S.CardContainer>
  );
};
export default Card;
