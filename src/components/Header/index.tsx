import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Flex from "components/Flex";
import SearchBar from "components/SearchBar";
const StickyContainer = styled(Container)`
  position: sticky;
  top: 0;
  border-bottom: ${({ theme }) => theme.colors.lightGray} solid 0.1rem;
`;
const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: bold;

  @media ${({ theme }) => theme.device.mobileL} {
    display: none;
  }
`;
const Wrapper = styled(Flex)`
  max-width: ${({ theme }) => theme.maxWidth};
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.small};
  margin: 0 auto;

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
  }
`;
const SideWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  return (
    <StickyContainer>
      <Wrapper>
        <SideWrapper>
          <Logo>REMOCON</Logo>
        </SideWrapper>
        <SideWrapper>
          <SearchBar />
        </SideWrapper>
      </Wrapper>
    </StickyContainer>
  );
};
export default Header;
