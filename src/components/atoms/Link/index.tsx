import React from "react";
import * as S from "./style";
interface LinkProps {
  children: React.ReactNode | string;
  to?: string;
  href?: string;
  className?: string;
}
const Link: React.FC<LinkProps> = ({
  children,
  to = null,
  href = null,
  className = null,
}) => {
  if (to) {
    return (
      <S.StyledLink className={className} to={to}>
        {children}
      </S.StyledLink>
    );
  } else if (href) {
    return (
      <S.Anchor className={className} href={href}>
        {children}
      </S.Anchor>
    );
  }
};
export default Link;
