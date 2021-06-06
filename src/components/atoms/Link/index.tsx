import React from "react";
import * as S from "./style";
interface LinkProps {
  children: React.ReactNode | string;
  to?: string | Object;
  href?: string;
  onClick?: () => void;
  className?: string;
  padding?: string;
}
const Link: React.FC<LinkProps> = ({
  children,
  to = null,
  href = null,
  className = null,
  onClick = null,
  padding,
}) => {
  if (to) {
    return (
      <S.StyledLink
        className={className}
        to={to}
        onClick={onClick}
        style={{ padding }}
      >
        {children}
      </S.StyledLink>
    );
  } else if (href) {
    return (
      <S.Anchor
        className={className}
        href={href}
        onClick={onClick}
        style={{ padding }}
      >
        {children}
      </S.Anchor>
    );
  }
};
export default React.memo(Link);
