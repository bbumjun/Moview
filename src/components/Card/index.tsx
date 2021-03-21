import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Image from "components/Card/Image";
import Flex from "components/Flex";
import Text from "components/Text";

interface CardProps {
  posterPath: string;
  title: string;
  voteAverage: number;
  country: string;
  releaseDate: string;
}
const Wrapper = styled(Flex)`
  flex-direction: column;
`;
const Card: React.FC<CardProps> = ({
  posterPath,
  title,
  voteAverage,
  country,
  releaseDate,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Image posterPath={posterPath} title={title} />
      <Text role="title" className="font-bold text-lg">
        {title}
      </Text>
      <Text role="info" className="flex items-center">
        {releaseDate.slice(0, 4)} <span className="px-4">▪</span>
        <img src={`https://flagcdn.com/20x15/${country}.png`} alt={country} />
      </Text>
      <Text role="rate">⭐{Math.round(voteAverage * 5) / 10}</Text>
    </Wrapper>
  );
};

export default Card;
