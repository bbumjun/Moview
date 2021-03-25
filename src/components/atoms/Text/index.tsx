import React from "react";
import * as S from "./index.style";

export interface TextProps {
  size: "sm" | "base" | "lg" | "xl";
  color?: string;
  bgColor?: string;
  fontWeight?: number;
  children: React.ReactNode | string;
}
const Text: React.FC<TextProps> = ({
  size,
  color = "black",
  bgColor = "white",
  fontWeight = 400,
  children,
}) => (
  <S.Text
    className={size}
    color={color}
    bgColor={bgColor}
    fontWeight={fontWeight}
  >
    {children}
  </S.Text>
);

export default Text;
