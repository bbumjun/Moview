import styled from "styled-components";
export const FilteredTextContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 2rem;
  margin-top: 0.2rem;
  background-color: white;
  border: 0.1rem ${({ theme }) => theme.colors.lightGray} solid;
  border-radius: 0.2rem;
  @media (max-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
`;
export const filteredTextList = styled.ul``;
export const filterdTextItem = styled.li`
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
