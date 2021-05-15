import styled from "styled-components";
import Link from "components/atoms/Link";

export const CardContainer = styled.li<{
  $wrap: boolean;
  $numberPerLine: number;
}>`
  padding: 0 0.3rem;
  flex: 0 0 calc(100% / ${({ $numberPerLine }) => $numberPerLine});
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex: ${({ $wrap }) => ($wrap ? "0 0 calc(100% / 3)" : "0 0 30%")};
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  background-color: whitesmoke;
  overflow: hidden;
`;

export const LinkWrapper = styled(Link)``;
