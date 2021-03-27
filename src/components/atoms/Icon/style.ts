import styled from "styled-components";

interface IconProps {
  height: number;
}
export const Wrapper = styled.span`
  padding: 0.5rem;
`;
export const Img = styled.img<IconProps>`
  height: ${(p: IconProps) => `${p.height}rem`};
`;
