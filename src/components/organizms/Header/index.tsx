import React, { ChangeEvent, useState, useEffect } from "react";
import * as S from "./style";
import ButtonList from "../../molcules/ButtonList";
import Link from "../../atoms/Link";
import { LOGO, CATEGORY_MOVIE, CATEGORY_TV } from "common/string";
import { useRecoilState } from "recoil";
import { contentTypeState, searchInputState } from "store/header";
import theme from "common/theme";
import useKeyPress from "hooks/useKeyPress";
export interface IHeaderProps {
  className?: string;
}
const Header: React.FC<IHeaderProps> = ({ className = null }) => {
  const [, setInputValue] = useRecoilState(searchInputState);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [contentType, setContentType] = useRecoilState(contentTypeState);
  const onMovieClick = () => {
    if (contentType !== "movie") setContentType("movie");
  };
  const onTVClick = () => {
    if (contentType !== "tv") setContentType("tv");
  };

  const [keyValue] = useKeyPress();

  useEffect(() => {
    if (keyValue == "Escape") {
      setInputValue("");
    }
  }, [keyValue]);
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
            <Link to="/">
              <S.StyledButton
                key={CATEGORY_MOVIE}
                active={contentType == "movie"}
                onClick={onMovieClick}
              >
                {CATEGORY_MOVIE}
              </S.StyledButton>
            </Link>
            <Link to="/">
              <S.StyledButton
                key={CATEGORY_TV}
                active={contentType == "tv"}
                onClick={onTVClick}
              >
                {CATEGORY_TV}
              </S.StyledButton>
            </Link>
          </ButtonList>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          <S.SearchBar
            placeholder="작품 제목을 검색해보세요."
            handleInputChange={handleInputChange}
            inputName="searchInput"
          />
        </S.RightSideContainer>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};
export default Header;
