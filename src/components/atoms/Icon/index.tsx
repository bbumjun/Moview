import * as React from "react";
import * as S from "./style";

export interface IconProps {
  alt?: string;
  src: string;
  height: number;
  className?: string;
}
const Icon: React.FC<IconProps> = ({ alt, src, height, className = null }) => (
  <S.Wrapper className={className}>
    <S.Img src={src} alt={alt} height={height} />
  </S.Wrapper>
);

export default Icon;
