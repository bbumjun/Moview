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
      <Image posterPath={posterPath} />
      <Text fontWeight="bold">{title}</Text>
      <Text>
        {releaseDate} .. {country}
      </Text>
      <Text>⭐{voteAverage}</Text>
    </Wrapper>
  );
};

export default Card;
