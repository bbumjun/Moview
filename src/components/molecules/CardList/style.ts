import styled from "styled-components";
import Icon from "components/atoms/Icon";
import Button from "components/atoms/Button";
import Text from "components/atoms/Text";
export const ContentListContainer = styled.ul<{ $wrap: boolean }>`
  display: flex;
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  padding: 2% 0 2% 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    overflow-x: scroll;
    overflow-x: ${(props) => (props.$wrap ? "visible" : "scroll")};
  }
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Title = styled(Text)``;
export const LeftButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  box-shadow: -1px 0px 5px gray;
  left: -1rem;
  top: 40%;
  padding: 0.5rem;
  font-size: 0;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const RightButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  box-shadow: 1px 0px 5px gray;
  font-size: 0;
  padding: 0.5rem;
  right: -0.5rem;
  top: 40%;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const StyledIcon = styled(Icon)`
  padding: 0;
`;
