import React, { Ref, useEffect, useRef } from "react";
import * as S from "./style";
import useIntersect from "hooks/useIntersect";
export interface ImageProps {
  src: string;
  alt: string;
  index?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const elementRef = useRef<HTMLImageElement>();
  const IntersectOptions = { freezeOnceVisible: true };
  const entry = useIntersect(elementRef, IntersectOptions);
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      elementRef.current.src = src;
      elementRef.current.alt = alt;
    }
  }, [isVisible]);
  return <S.Image ref={elementRef}></S.Image>;
};

export default Image;
