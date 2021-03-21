import styled from "styled-components";
import React from "react";

interface ImageProps {
  posterPath: string;
  title: string;
}

const Wrapper = styled.div`
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
`;
const Image: React.FC<ImageProps> = ({ posterPath, title }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <Wrapper className="max-w-xs">
      <Img
        className="rounded"
        role="posterImage"
        src={imagePath + posterPath}
        alt={title}
      />
    </Wrapper>
  );
};
export default Image;
