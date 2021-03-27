import styled from "styled-components";
import Link from "../../atoms/Link";
import Text from "../../atoms/Text";
import tw from "twin.macro";

export const Wrapper = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ebebeb;
`;
export const Logo = styled(Text)`
  color: #e50914;
`;
export const HeaderContainer = styled.div`
  ${tw`max-w-screen-xl`}
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
