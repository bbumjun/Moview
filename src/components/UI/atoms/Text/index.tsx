import React from "react";
import styled from "styled-components";
export interface TextProps {
  content: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

const StyledText = styled(Text)``;
export default StyledText;
