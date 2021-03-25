import React from "react";
import * as S from "./index.style";
export interface ImageProps {
  src: string;
  alt: string;
  index?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <S.Image src={src} alt={alt}></S.Image>
);

export default Image;
