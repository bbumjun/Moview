import React from "react";
import * as S from "./style";

export interface IOverview {
  overview: string;
  tagline: string;
}
const Overview: React.FC<IOverview> = (props) => (
  <S.Container>
    <S.Title>줄거리</S.Title>
    <S.Summary>{`${props.tagline} ${props.overview}`}</S.Summary>
  </S.Container>
);

export default Overview;
