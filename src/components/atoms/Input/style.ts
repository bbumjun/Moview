import styled from "styled-components";
import tw from "twin.macro";
export const Input = styled.input`
  ${tw`bg-gray-100 m-1 rounded`}
  &:focus {
    outline: 0;
  }
`;
