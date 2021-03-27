import styled from "styled-components";
import tw from "twin.macro";

interface TextProps {
  fontSize: number;
  color: string;
  bgColor: string;
  fontWeight: number;
  fontFamily: string;
  padding: string;
}
export const Text = styled.span<TextProps>`
  border-radius: 4px;
  width: inherit;
  color: ${(p: TextProps) => p.color};
  background-color: ${(p: TextProps) => p.bgColor};
  font-weight: ${(p: TextProps) => p.fontWeight};
  font-family: ${(p: TextProps) => p.fontFamily};
  font-size: ${(p: TextProps) => `${p.fontSize}rem`};
  padding: ${(p: TextProps) => p.padding};
`;
