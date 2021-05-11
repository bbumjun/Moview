import styled from "styled-components";

interface IconProps {
  height: number;
}
export const Wrapper = styled.span`
  font-size: 0;
`;
export const Img = styled.img<IconProps>`
  height: ${(p: IconProps) => `${p.height}rem`};
  width: ${(p: IconProps) => `${p.height}rem`};
`;
