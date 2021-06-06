import styled from "styled-components";
import Text from "components/atoms/Text";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.tabletL};
  margin: 2rem 0;
`;

export const Title = styled(Text)`
  font-weight: bold;
`;
export const Summary = styled(Text)``;
