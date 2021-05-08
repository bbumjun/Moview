import React from "react";
import * as S from "./style";
import CastCard, { ICastCard } from "components/molcules/CastCard";
import useSlider from "hooks/useSlider";
import Icon from "components/atoms/Icon";
import leftArrow from "images/left-arrow.svg";
import rightArrow from "images/right-arrow.svg";
import Text from "components/atoms/Text";
import useSwr from "swr";
import { fetcherWithParams } from "common/requests";

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
  const {
    containerRef,
    handlePageToLeft,
    handlePageToRight,
    currentPage,
    totalPage,
  } = useSlider();
  return (
    <S.Wrapper>
      <Text fontWeight={700} fontSize={1.2} padding="1rem 0">
        주요 출연진
      </Text>
      <S.Container ref={containerRef}>
        {castList.map((cast) => (
          <S.Item key={cast.id}>
            <CastCard
              profile_path={cast.profile_path}
              name={cast.name}
              character={cast.character}
            />
          </S.Item>
        ))}
        <S.LeftButton onClick={handlePageToLeft} hidden={currentPage === 0}>
          <Icon src={leftArrow} alt="previous cards" height={1} />
        </S.LeftButton>
        <S.RightButton
          onClick={handlePageToRight}
          hidden={currentPage === totalPage}
        >
          <Icon src={rightArrow} alt="next cards" height={1} />
        </S.RightButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default CastList;
