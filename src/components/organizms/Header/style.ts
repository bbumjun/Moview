import styled from "styled-components";
import Text from "../../atoms/Text";

export const Wrapper = styled.div`
  padding: 0 0.5rem;
  border-bottom: 1px solid #ebebeb;
  background-color: white;
`;
export const Logo = styled(Text)`
  color: #e50914;
`;
export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.deviceSizes.laptop}) {
    padding: 0 3rem;
  }
`;
export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
