import React from "react";
import * as S from "./style";

export interface IOverview {
  overview: string;
  tagline: string;
}
const Overview: React.FC<IOverview> = (props) => {
  const content = `${props.tagline} ${props.overview}`;
  return (
    <S.Container>
      <S.Title fontSize={1.2} fontWeight={700} padding="1rem 0">
        줄거리
      </S.Title>
      <S.Summary fontSize={1}>
        {content.trim() ? content : `한글 줄거리는 아직 지원되지 않습니다.`}
      </S.Summary>
    </S.Container>
  );
};

export default Overview;
