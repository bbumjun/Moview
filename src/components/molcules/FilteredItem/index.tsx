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
import Link from "components/atoms/Link";
export interface FilteredItemProps {
  data: IContent;
}
const FilteredItem = ({ data }: FilteredItemProps) => {
  const movieGenres = useRecoilValue(movieGenresState);
  const tvGenres = useRecoilValue(tvGenresState);
  const date = data.release_date ?? data.first_air_date;
  const title = omitText(data.title ?? data.name, 20);
  function omitText(text: string, maxLength: number) {
    if (text.length < maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  }

  return (
    <Link to={`/contents/${data.media_type}/${data.id}`}>
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
            <S.Title fontSize={1} fontWeight={700}>
              {title}
            </S.Title>
            {date && (
              <S.Released fontSize={1} fontWeight={300} color={"gray"}>{`(${
                parseDate(date).year
              })`}</S.Released>
            )}
          </S.FirstLine>
          <S.SecondLine>
            {data.media_type === "movie" &&
              data.genre_ids.slice(0, 3).map((gerneId) => {
                const genre = movieGenres.find((genre) => genre.id === gerneId);
                return (
                  <li key={gerneId}>
                    <S.Genre color="white" bgColor={genre.color}>
                      {genre.name}
                    </S.Genre>
                  </li>
                );
              })}
            {data.media_type === "tv" &&
              data.genre_ids.slice(0, 3).map((gerneId) => {
                const genre = tvGenres.find((genre) => genre.id === gerneId);
                return (
                  <li key={gerneId}>
                    <S.Genre color="white" bgColor={genre.color}>
                      {genre.name}
                    </S.Genre>
                  </li>
                );
              })}
          </S.SecondLine>
        </S.TextContainer>
      </S.Container>
    </Link>
  );
};

export default FilteredItem;
