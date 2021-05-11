import React from "react";
import CastCard, { ICastCard } from "components/molcules/CastCard";
import useSwr from "swr";
import { fetcherWithParams } from "common/requests";
import CardList from "src/components/molcules/CardList";

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
      items={castList.map((cast) => (
        <CastCard
          key={cast.id}
          profile_path={cast.profile_path}
          name={cast.name}
          character={cast.character}
        />
      ))}
    />
  );
};

export default CastList;
