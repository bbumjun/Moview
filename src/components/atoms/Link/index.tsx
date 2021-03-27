import React from "react";
import * as S from "./style";
interface LinkProps {
  children: React.ReactNode | string;
  to?: string;
  href?: string;
}
const Link: React.FC<LinkProps> = ({ children, to = null, href = null }) => {
  if (to) {
    return <S.StyledLink to={to}>{children}</S.StyledLink>;
  } else if (href) {
    return <S.Anchor href={href}>{children}</S.Anchor>;
  }
};
export default Link;
