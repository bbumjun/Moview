import React, { ImgHTMLAttributes, useEffect, useRef } from "react";
import * as S from "./style";
import useIntersect from "hooks/useIntersect";
import defaultImage from "images/default.png";
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  index?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...rest }) => {
  const elementRef = useRef<HTMLImageElement>();
  const IntersectOptions = { freezeOnceVisible: true };
  const entry = useIntersect(elementRef, IntersectOptions);
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      elementRef.current.src = elementRef.current.dataset.src;
    }
  }, [isVisible, src]);
  return (
    <S.Image
      ref={elementRef}
      src={defaultImage}
      data-src={src}
      alt={alt}
      {...rest}
    />
  );
};

export default React.memo(Image);
