import * as React from "react";
import AspectRatio from "components/atoms/AspectRatio";
import Image from "components/atoms/Image";

export interface IAspectRatioImage {
  src: string;
  ratio: number;
  alt: string;
  className?: string;
}

const AspectRatioImage: React.FC<IAspectRatioImage> = ({
  src,
  ratio,
  alt,
  className = null,
}) => (
  <AspectRatio className={className} ratio={ratio}>
    <Image src={src} alt={alt} />
  </AspectRatio>
);

export default AspectRatioImage;
