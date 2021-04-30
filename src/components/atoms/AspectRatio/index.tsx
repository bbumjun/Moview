import * as React from "react";
import styled from "styled-components";
const Outer = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${(p: { ratio: number }) => `${(1 / p.ratio) * 100}%`};
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
export interface AspectRatioProps {
  children: React.ReactNode;
  ratio?: number;
  className?: string;
}
const AspectRatio: React.FC<AspectRatioProps> = ({
  children,
  ratio = 1,
  className = null,
}) => (
  <Outer ratio={ratio} className={className}>
    <Inner>{children}</Inner>
  </Outer>
);

export default AspectRatio;
