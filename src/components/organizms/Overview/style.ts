import styled from "styled-components";
import Text from "components/atoms/Text";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.tabletL};
`;

export const Title = styled(Text)`
  font-weight: bold;
`;
export const Summary = styled(Text)``;
