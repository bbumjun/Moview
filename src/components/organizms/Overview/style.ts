import styled from "styled-components";
import Text from "components/atoms/Text";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.deviceSizes.tabletL};
`;

export const Title = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const Summary = styled(Text)`
  font-size: 1rem;
`;
