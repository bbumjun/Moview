import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Flex from "components/Flex";
import SearchBar from "components/SearchBar";
const StickyContainer = styled(Container)`
  position: sticky;
  top: 0;
  border-bottom: ${({ theme }) => theme.colors.black} solid 0.1rem;
`;
const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: bold;
`;
const Wrapper = styled(Flex)`
  max-width: ${({ theme }) => theme.maxWidth};
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.base};
  margin: 0 auto;
`;
const SideWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
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
