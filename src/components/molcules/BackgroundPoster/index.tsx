import React, { useState } from "react";
import * as S from "./style";
import { getDominantColor } from "common/utils";
import { smallImgUrl, originalImgUrl } from "common/url";
import { ratio } from "common/utils";
export interface IBackgroundPoster {
  imageSrc: string;
  bgColor: string;
}

const BackgrounPoster: React.FC<IBackgroundPoster> = ({
  imageSrc,
  bgColor,
}) => (
  <S.Wrapper bgColor={bgColor}>
    <S.ImageWrapper>
      <S.StyledAspectRatio ratio={ratio.widescreen}>
        <S.BgImg src={originalImgUrl + imageSrc} role={"background"} />
        <S.Filter color={bgColor} />
      </S.StyledAspectRatio>
    </S.ImageWrapper>
  </S.Wrapper>
);

export default BackgrounPoster;