import React from "react";
import * as S from "./style";
import BackgroundPoster from "components/molcules/BackgroundPoster";
import AspectRatioImage from "components/molcules/AspectRatioImage";
import Image from "components/atoms/Image";
import { ratio, getCountryFlag } from "common/utils";
import { smallImgUrl } from "common/url";
import { IContentDetail } from "types";
import { getHalfAndRounded } from "common/utils";

const Profile: React.FC<IContentDetail & { bgColor: string }> = (props) => {
  const backgroundPath = props.backdrop_path;
  const title = props.title ?? props.name;
  const releaseDate = props.release_date ?? props.first_air_date;
  const releaseYear = releaseDate.slice(0, 4);
  const posterPath = smallImgUrl + props.poster_path;
  const genres = props.genres.reduce<string>(
    (acc, cur) => `${acc} ▪ ${cur.name}`,
    ""
  );
  const countries = props.production_countries;
  const voteAverage = getHalfAndRounded(props.vote_average);
  const voteCount = props.vote_count;
  return (
    <S.Container>
      <BackgroundPoster imageSrc={backgroundPath} bgColor={props.bgColor} />
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
              {releaseYear} {genres}▪{" "}
              {countries.map((country) => (
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
