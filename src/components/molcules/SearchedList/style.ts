import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow-y: scroll;
  position: absolute;
  top: 2rem;
  margin-top: 0.2rem;
  background-color: white;
  border-radius: 0.2rem;
`;
export const List = styled.ul``;
export const Item = styled.li`
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
