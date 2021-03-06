import styled from "styled-components";
import Text from "../../atoms/Text";
import SearchInput from "src/components/molecules/SearchInput";
import Button from "components/atoms/Button";
export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    border-bottom: 1px solid #ebebeb;
  }
  background-color: white;
  z-index: 2;
`;
export const Logo = styled(Text)`
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.deviceSizes.laptop}) {
    padding-left: 3%;
    padding-right: 3%;
  }
`;
export const StyledButton = styled(Button)`
  margin-right: 1rem;
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`;
export const SearchBar = styled(SearchInput)``;
export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;
export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
