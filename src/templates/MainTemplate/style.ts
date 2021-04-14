import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.deviceSizes.laptop}) {
    padding-left: 3%;
    padding-right: 3%;
  }
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
export const Footer = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;
