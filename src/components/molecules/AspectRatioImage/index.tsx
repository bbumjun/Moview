import * as React from "react";
import AspectRatio from "components/atoms/AspectRatio";
import Image from "components/atoms/Image";
import defaultImage from "images/picture.svg";
import styled from "styled-components";
export interface IAspectRatioImage {
  src: string;
  ratio: number;
  alt: string;
  className?: string;
}

const AspectRatioContainer = styled(AspectRatio)``;
const DefaultImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
`;
const AspectRatioImage: React.FC<IAspectRatioImage> = ({
  src,
  ratio,
  alt,
  className = null,
}) => (
  <AspectRatioContainer className={className} ratio={ratio}>
    {src ? (
      <Image src={src} alt={alt} />
    ) : (
      <DefaultImageWrapper>
        <Image src={defaultImage} alt={alt} />
      </DefaultImageWrapper>
    )}
  </AspectRatioContainer>
);

export default AspectRatioImage;
