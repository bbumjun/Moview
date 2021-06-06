import React from "react";
import CastCard, { ICastCard } from "src/components/molecules/CastCard";
import useSwr from "swr";
import { fetcherWithParams } from "common/requests";
import CardList from "src/components/molecules/CardList";

export interface ICastList {
  contentType: "movie" | "tv";
  id: string;
}
const CastList: React.FC<ICastList> = ({ contentType, id }) => {
  const { data } = useSwr<{ cast: ICastCard[] }>(
    [`${contentType}/${id}/credits`],
    fetcherWithParams,
    { suspense: true }
  );
  const castList = data.cast;

  return (
    <CardList
      contentTitle={"주요 출연진"}
      titleFontSize={1.2}
      items={
        castList.length === 0
          ? "아직 등록된 내용이 없어요."
          : castList.map((cast) => (
              <CastCard
                key={cast.id}
                profile_path={cast.profile_path}
                name={cast.name}
                character={cast.character}
              />
            ))
      }
    />
  );
};

export default CastList;
