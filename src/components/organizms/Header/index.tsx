import React, { ChangeEvent, useState, useEffect } from "react";
import * as S from "./style";
import ButtonList from "../../molcules/ButtonList";
import Link from "../../atoms/Link";
import { LOGO, CATEGORY_MOVIE, CATEGORY_TV } from "common/string";
import { useRecoilState } from "recoil";
import { contentTypeState } from "store/header";
import theme from "common/theme";
export interface IHeaderProps {
  className?: string;
}
const Header: React.FC<IHeaderProps> = ({ className = null }) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [contentType, setContentType] = useRecoilState(contentTypeState);

  const onMovieClick = () => {
    setContentType("movie");
  };
  const onTVClick = () => {
    setContentType("tv");
  };
  return (
    <S.Wrapper className={className}>
      <S.HeaderContainer>
        <S.LeftSideContainer>
          <Link to={"/"} onClick={onMovieClick}>
            <S.Logo
              fontSize={2}
              fontWeight={700}
              fontFamily={`'Dela Gothic One', cursive;`}
              padding={"0 1rem 0 0"}
              color={theme.colors.red}
            >
              {LOGO}
            </S.Logo>
          </Link>
          <ButtonList>
            <Link to={"/"} onClick={onMovieClick}>
              <S.StyledButton
                key={CATEGORY_MOVIE}
                active={contentType == "movie"}
              >
                {CATEGORY_MOVIE}
              </S.StyledButton>
            </Link>
            <Link to={"/"} onClick={onTVClick}>
              <S.StyledButton key={CATEGORY_TV} active={contentType == "tv"}>
                {CATEGORY_TV}
              </S.StyledButton>
            </Link>
          </ButtonList>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          <S.SearchBar
            value={value}
            placeholder="작품 제목을 검색해보세요."
            onChange={handleInputChange}
            inputName="searchInput"
          />
        </S.RightSideContainer>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};
export default Header;
