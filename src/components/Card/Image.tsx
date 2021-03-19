import styled from "styled-components";
import React from "react";

interface ImageProps {
  posterPath: string;
}

const Wrapper = styled.div``;
const Img = styled.img``;
const Image: React.FC<ImageProps> = ({ posterPath }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <Wrapper>
      <Img src={imagePath + posterPath} />
    </Wrapper>
  );
};
export default Image;
