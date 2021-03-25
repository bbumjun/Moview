import React from "react";
import * as S from "./index.style";
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
    <S.CardWrapper>
      <S.ImageWrapper>
        <Image src={imgSrc} alt={title} index={index} />
      </S.ImageWrapper>
      <Text size="base" fontWeight={900}>
        {title}
      </Text>
      <Text size="sm">개봉일: {date.replace(/-/g, ".")}</Text>
      <Text size="sm">⭐{rate}</Text>
    </S.CardWrapper>
  );
};
export default Card;
