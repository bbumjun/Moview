import styled from "styled-components";
import Icon from "components/atoms/Icon";
import Button from "components/atoms/Button";
export const CardListContainer = styled.ul`
  display: flex;
  padding: 1rem 0 3rem 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    overflow-x: scroll;
  }
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const LeftButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  box-shadow: -1px 0px 5px gray;
  left: -1rem;
  top: 40%;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const RightButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  box-shadow: 1px 0px 5px gray;
  right: 0;
  top: 40%;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const StyledIcon = styled(Icon)`
  padding: 0;
`;
