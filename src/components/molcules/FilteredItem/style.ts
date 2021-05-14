import styled from "styled-components";
import Text from "components/atoms/Text";
export const Container = styled.div`
  display: flex;
`;
export const Thumnail = styled.div`
  width: 4rem;
  height: 5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
`;
export const FirstLine = styled.div`
  display: flex;
`;
export const Title = styled(Text)``;
export const Released = styled(Text)`
  margin: 0 0.5rem;
`;
export const SecondLine = styled.ul`
  display: flex;
`;
export const Genre = styled(Text)`
  padding: 0.2rem;
  margin: 0.2rem;
`;
