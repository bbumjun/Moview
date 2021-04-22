import styled from "styled-components";
import Text from "../../atoms/Text";
import SearchInput from "components/molcules/SearchInput";
import Button from "components/atoms/Button";
export const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    border-bottom: 1px solid #ebebeb;
  }
  background-color: white;
`;
export const Logo = styled(Text)`
  color: #e50914;
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const StyledButton = styled(Button)`
  margin-right: 1rem;
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`;
export const SearchBar = styled(SearchInput)`
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;
export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
