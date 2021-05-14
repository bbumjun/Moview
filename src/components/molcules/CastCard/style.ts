import styled from "styled-components";
import Text from "components/atoms/Text";

export const Container = styled.li`
  box-shadow: 0 0 5px lightgray;
  border-radius: 10px;
  max-height: 15 rem;
  margin: 3px;
  flex: 0 0 calc(100% / 7 - 6px);
  @media ${({ theme }) => theme.device.tablet} {
    flex: 0 0 calc(100% / 3 - 6px);
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;
export const Description = styled.div`
  padding: 0.5rem;
`;
export const Name = styled(Text)`
  font-weight: bold;
`;
export const Character = styled(Text)``;
