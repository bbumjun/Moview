import React from "react";
import * as S from "./style";
import { getSmallImgUrl } from "common/url";
import { ratio } from "common/utils";
import AspectRatioImage from "../AspectRatioImage";
export interface ICastCard {
  profile_path: string;
  name: string;
  character: string;
  id?: number;
}
const CastCard: React.FC<ICastCard> = ({ profile_path, name, character }) => (
  <S.Container>
    <S.ImageWrapper>
      <AspectRatioImage
        ratio={1 / ratio.standard}
        src={getSmallImgUrl(profile_path)}
        alt={name}
      />
    </S.ImageWrapper>
    <S.Description>
      <S.Name fontSize={0.8}>{name}</S.Name>
      <S.Character fontSize={0.6}>{character}</S.Character>
    </S.Description>
  </S.Container>
);

export default CastCard;
