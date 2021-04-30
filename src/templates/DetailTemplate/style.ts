import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f8f8;
`;

export const Profile = styled.div`
  background-color: white;
`;
export const Content = styled.div`
  max-width: ${({ theme }) => theme.deviceSizes.tabletL};
  margin: 2rem auto;
  padding: 1rem;
  background-color: white;
  border: 0.1rem lightgray solid;
  border-radius: 10px;
  @media ${({ theme }) => theme.device.tabletL} {
    margin: 2rem 1rem;
  }
`;
