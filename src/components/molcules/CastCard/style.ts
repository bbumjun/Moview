import styled from "styled-components";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";

export const Container = styled.li`
  box-shadow: 0 0 5px lightgray;
  border-radius: 5px;
  overflow: hidden;
  margin: 0.5%;
  flex: 0 0 11.5%;
`;
export const ImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;
export const ProfileImage = styled(Image)``;
export const Description = styled.div`
  padding: 0.5rem;
  min-height: 5rem;
`;
export const Name = styled(Text)`
  font-weight: bold;
`;
export const Character = styled(Text)``;
