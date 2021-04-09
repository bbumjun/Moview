import styled from "styled-components";
import Link from "components/atoms/Link";
export const CardContainer = styled.li`
  /* max-width: 25rem; */
  padding: 0 1rem 0 0;
  flex: 1 0 20%;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex: 1 0 30%;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
  background-color: whitesmoke;
  overflow: hidden;
`;
export const LinkWrapper = styled(Link)``;
