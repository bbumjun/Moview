import React from "react";
import * as S from "./style";
import { smallImgUrl } from "common/url";
import avatar from "images/avatar.svg";
import Image from "components/atoms/Image";
import AspectRatio from "components/atoms/AspectRatio";
import { ratio } from "common/utils";
export interface ICastCard {
  profile_path: string;
  name: string;
  character: string;
  id?: number;
}
const CastCard: React.FC<ICastCard> = ({ profile_path, name, character }) => (
  <S.Container>
    <S.ImageWrapper>
      <AspectRatio ratio={1 / ratio.standard}>
        <Image
          src={profile_path ? smallImgUrl + profile_path : avatar}
          alt={name}
        />
      </AspectRatio>
    </S.ImageWrapper>
    <S.Description>
      <S.Name fontSize={1}>{name}</S.Name>
      <S.Character>{character}</S.Character>
    </S.Description>
  </S.Container>
);

export default CastCard;
