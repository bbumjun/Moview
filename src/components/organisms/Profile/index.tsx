import React from "react";
import * as S from "./style";
import BackgroundPoster from "src/components/molecules/BackgroundPoster";
import AspectRatioImage from "src/components/molecules/AspectRatioImage";
import Image from "components/atoms/Image";
import { ratio, getCountryFlag, parseDate } from "common/utils";
import { getSmallImgUrl } from "common/url";
import { getHalfAndRounded } from "common/utils";
import useContentDetail from "hooks/useContentDetail";
import { useRecoilValue } from "recoil";
import { backgroundColorState } from "store/detail";
export interface IProfile {
  contentType: "movie" | "tv";
  id: string;
}

const Profile: React.FC<IProfile> = ({ contentType, id }) => {
  const { data } = useContentDetail(contentType, id);
  const bgColor = useRecoilValue(
    backgroundColorState(getSmallImgUrl(data.backdrop_path))
  );
  const backgroundPath = data.backdrop_path;
  const title = data.title ?? data.name;
  const releaseDate = data.release_date ?? data.first_air_date;
  const posterPath = getSmallImgUrl(data.poster_path);
  const genres = data.genres
    ? data.genres.reduce<string>((acc, cur) => `${acc} ▪ ${cur.name}`, "")
    : null;
  const countries = data.production_countries;
  const voteAverage = getHalfAndRounded(data.vote_average);
  const voteCount = data.vote_count;
  return (
    <S.Container>
      <BackgroundPoster imageSrc={backgroundPath} bgColor={bgColor} />
      <S.ProfileContainer>
        <S.PosterWrapper>
          <AspectRatioImage
            src={posterPath}
            ratio={1 / ratio.standard}
            alt={title}
          />
        </S.PosterWrapper>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.BriefInfoSpan>
            <S.BriefInfo>
              {releaseDate && parseDate(releaseDate).year} {genres}{" "}
              {genres && `▪`}{" "}
              {countries &&
                countries.map((country) => (
                  <S.Flag key={country.iso_3166_1}>
                    <Image
                      src={getCountryFlag(country.iso_3166_1)}
                      alt={country.name}
                    />
                  </S.Flag>
                ))}
            </S.BriefInfo>
          </S.BriefInfoSpan>

          <S.VoteAverage>
            평균 ★{voteAverage} ({voteCount}명)
          </S.VoteAverage>
        </S.TextContainer>
      </S.ProfileContainer>
    </S.Container>
  );
};

export default Profile;
