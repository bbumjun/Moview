import React from "react";
import useContentDetail from "src/hooks/useContentDetail";
import * as S from "./style";

export interface IOverview {
  contentType: "movie" | "tv";
  id: string;
}
const Overview: React.FC<IOverview> = ({ contentType, id }) => {
  const { data } = useContentDetail(contentType, id);
  const content = `${data.tagline} ${data.overview}`;
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
