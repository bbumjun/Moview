import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 2rem 0;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.deviceSizes.laptop}) {
    padding-left: 3%;
    padding-right: 3%;
  }
`;
