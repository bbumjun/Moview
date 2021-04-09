import React, { ChangeEvent, useState } from "react";
import * as S from "./style";
import ButtonList from "../../molcules/ButtonList";
import Button from "../../atoms/Button";
import SearchInput from "../../molcules/SearchInput";
import Link from "../../atoms/Link";
import { LOGO, CATEGORY_MOVIE, CATEGORY_TV } from "common/constants/string";
export interface IHeaderProps {
  contentType: string;
  onMovieClick: () => void;
  onTVClick: () => void;
}
const Header: React.FC<IHeaderProps> = ({
  onMovieClick,
  onTVClick,
  contentType,
}) => {
  const [value, setValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.LeftSideContainer>
          <Link to={"/"}>
            <S.Logo
              fontSize={2}
              fontWeight={700}
              fontFamily={`'Dela Gothic One', cursive;`}
              padding={"0 1rem 0 0"}
            >
              {LOGO}
            </S.Logo>
          </Link>
          <ButtonList>
            <Button
              key={CATEGORY_MOVIE}
              onClick={onMovieClick}
              active={contentType == "movie"}
            >
              {CATEGORY_MOVIE}
            </Button>
            <Button
              key={CATEGORY_TV}
              onClick={onTVClick}
              active={contentType == "tv"}
            >
              {CATEGORY_TV}
            </Button>
          </ButtonList>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          <SearchInput
            inputProps={{
              value,
              placeholder: "작품 제목을 검색해보세요.",
              onChange: handleInputChange,
              inputName: "searchInput",
            }}
          />
        </S.RightSideContainer>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};
export default Header;
