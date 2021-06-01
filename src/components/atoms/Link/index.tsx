import React from "react";
import * as S from "./style";
interface LinkProps {
  children: React.ReactNode | string;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}
const Link: React.FC<LinkProps> = ({
  children,
  to = null,
  href = null,
  className = null,
  onClick = null,
}) => {
  if (to) {
    return (
      <S.StyledLink className={className} to={to} onClick={onClick}>
        {children}
      </S.StyledLink>
    );
  } else if (href) {
    return (
      <S.Anchor className={className} href={href} onClick={onClick}>
        {children}
      </S.Anchor>
    );
  }
};
export default React.memo(Link);
