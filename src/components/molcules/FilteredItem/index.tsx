import React from "react";
import { getSmallImgUrl } from "common/url";
import { parseDate, ratio } from "common/utils";
import { IContent } from "types";
import AspectRatioImage from "components/molcules/AspectRatioImage";
import defaultImage from "images/picture.svg";
import * as S from "./style";
import Icon from "components/atoms/Icon";
import { useRecoilValue } from "recoil";
import { movieGenresState, tvGenresState } from "store/genres";
export interface FilteredItemProps {
  data: IContent;
}
const FilteredItem = ({ data }: FilteredItemProps) => {
  const date = data.release_date ?? data.first_air_date;
  const title = data.title ?? data.name;
  const movieGenres = useRecoilValue(movieGenresState);
  const tvGenres = useRecoilValue(tvGenresState);
  return (
    <S.Container>
      <S.Thumnail>
        {data.poster_path ? (
          <AspectRatioImage
            src={getSmallImgUrl(data.poster_path)}
            ratio={1 / ratio.standard}
            alt={title}
          />
        ) : (
          <Icon src={defaultImage} alt={"no image"} height={2} />
        )}
      </S.Thumnail>
      <S.TextContainer>
        <S.FirstLine>
          <S.Title fontWeight={700}>{title}</S.Title>
          {date && <S.Released>{`(${parseDate(date).year})`}</S.Released>}
        </S.FirstLine>
        <S.SecondLine>
          {data.media_type === "movie" &&
            data.genre_ids.map((gerneId) => (
              <span>
                {movieGenres.find((genre) => genre.id === gerneId).name}
              </span>
            ))}
          {data.media_type === "tv" &&
            data.genre_ids.map((gerneId) => (
              <span>{tvGenres.find((genre) => genre.id === gerneId).name}</span>
            ))}
        </S.SecondLine>
      </S.TextContainer>
    </S.Container>
  );
};

export default FilteredItem;
