import React from "react";
import * as S from "./style";
import { getOriginalImgUrl } from "common/url";
import { ratio } from "common/utils";
export interface IBackgroundPoster {
  imageSrc: string;
  bgColor: string;
}

const BackgrounPoster: React.FC<IBackgroundPoster> = ({
  imageSrc,
  bgColor,
}) => {
  return (
    <S.Wrapper bgColor={bgColor}>
      <S.ImageWrapper>
        <S.StyledAspectRatio ratio={ratio.widescreen}>
          {imageSrc && (
            <S.BgImg src={getOriginalImgUrl(imageSrc)} role={"background"} />
          )}
          <S.Filter color={bgColor} />
        </S.StyledAspectRatio>
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default BackgrounPoster;
