import styled from "styled-components";
import tw from "twin.macro";

interface TextProps {
  color: string;
  bgColor: string;
  fontWeight: number;
}
export const Text = styled.span<TextProps>`
  border-radius: 4px;
  width: inherit;
  color: ${(p: TextProps) => p.color};
  background-color: ${(p: TextProps) => p.bgColor};
  font-weight: ${(p: TextProps) => p.fontWeight};
  &.sm {
    ${tw`py-0.5 text-sm`}
  }
  &.base {
    ${tw`py-0.5 text-base`}
  }
  &.lg {
    ${tw`py-0.5 text-lg`}
  }
  &.xl {
    ${tw`py-0.5 text-xl`}
  }
`;
