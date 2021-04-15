import React from "react";
import * as S from "./style";
import Icon from "components/atoms/Icon";
import Link from "components/atoms/Link";

const Footer: React.FC = () => {
  return (
    <S.Container>
      <Link href="https://github.com/bbumjun/TMDB-movie-app">
        <Icon src="github.png" alt="github link" height={1} />
      </Link>
    </S.Container>
  );
};

export default Footer;
