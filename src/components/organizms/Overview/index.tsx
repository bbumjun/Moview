import React from "react";
import * as S from "./style";

export interface IOverview {
  overview: string;
  tagline: string;
}
const Overview: React.FC<IOverview> = (props) => (
  <S.Container>
    <S.Title fontSize={1.2} fontWeight={700} padding="1rem 0">
      줄거리
    </S.Title>
    <S.Summary fontSize={1}>{`${props.tagline} ${props.overview}`}</S.Summary>
  </S.Container>
);

export default Overview;
