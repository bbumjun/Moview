import React from "react";
import * as S from "./style";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import AspectRatio from "components/atoms/AspectRatio";
import { ratio } from "common/utils";
export interface ContentCardProps {
  category: string;
  title: string;
  imgSrc: string;
  date: string;
  rate: string;
  index: number;
  id: number;
  voteCount: number;
}
const ContentCard: React.FC<ContentCardProps> = ({
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
          <AspectRatio ratio={1 / ratio.standard}>
            <Image src={imgSrc} alt={title} index={index} />
          </AspectRatio>
        </S.ImageWrapper>
        <Text fontSize={1} fontWeight={900}>
          {title}
        </Text>
        <Text fontWeight={300}>{date.replace(/-/g, ".")}</Text>
        <Text>
          ⭐{voteCount == 0 ? "평가 없음" : rate} ▪{" "}
          {voteCount && `${voteCount}명`}{" "}
        </Text>
      </S.LinkWrapper>
    </S.CardContainer>
  );
};
export default ContentCard;