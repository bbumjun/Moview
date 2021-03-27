import styled from "styled-components";
import tw from "twin.macro";
export const CardContainer = styled.div`
  ${tw`w-24 md:w-40 lg:w-60`}

  display: flex;
  flex-direction: column;
`;
export const ImageWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;
