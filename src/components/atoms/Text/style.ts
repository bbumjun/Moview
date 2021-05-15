import styled from "styled-components";

interface TextProps {
  fontSize: number;
  color: string;
  bgColor: string;
  fontWeight: number;
  fontFamily: string;
  padding: string;
}
export const Text = styled.div<TextProps>`
  width: fit-content;
  color: ${(p: TextProps) => p.color};
  background-color: ${(p: TextProps) => p.bgColor};
  font-weight: ${(p: TextProps) => p.fontWeight};
  font-family: ${(p: TextProps) => p.fontFamily};
  font-size: ${(p: TextProps) => `${p.fontSize}rem`};
  padding: ${(p: TextProps) => p.padding};

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    font-size: ${(p: TextProps) => `${p.fontSize * 0.75}rem`};
  }
`;
