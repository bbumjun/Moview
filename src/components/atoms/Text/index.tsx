import React from "react";
import * as S from "./style";

export interface TextProps {
  children: React.ReactNode | string;
  fontSize?: number;
  color?: string;
  bgColor?: string;
  fontWeight?: number;
  fontFamily?: string;
  padding?: string;
  className?: string;
}
const Text: React.FC<TextProps> = ({
  fontSize = 0.8,
  color = "black",
  bgColor = "transparent",
  fontWeight = 400,
  fontFamily = "inherit",
  padding = "0.1rem 0",
  children,
  className = "",
}) => (
  <S.Text
    fontSize={fontSize}
    color={color}
    bgColor={bgColor}
    fontWeight={fontWeight}
    fontFamily={fontFamily}
    padding={padding}
    className={className}
  >
    {children}
  </S.Text>
);

export default Text;
