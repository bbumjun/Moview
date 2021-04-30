import styled from "styled-components";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";

export const Container = styled.div`
  width: 100%;
  max-width: 15rem;
  height: 100%;
  box-shadow: 0 0 10px lightgray;
  border-radius: 5px;
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ProfileImage = styled(Image)``;
export const Description = styled.div`
  padding: 0.5rem;
  min-height: 6rem;
`;
export const Name = styled(Text)`
  font-weight: bold;
`;
export const Character = styled(Text)``;
