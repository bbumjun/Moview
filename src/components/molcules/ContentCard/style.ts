import styled from "styled-components";
import Link from "components/atoms/Link";

export const CardContainer = styled.li<{ $wrap: boolean }>`
  padding: 0 0.5rem 0 0;
  flex: 0 0 20%;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex: ${({ $wrap }) => ($wrap ? "0 0 33.3%" : "0 0 30%")};
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
