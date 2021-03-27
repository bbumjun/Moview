import styled from "styled-components";
import Input from "../../atoms/Input";
import tw from "twin.macro";
export const Container = styled.div`
  ${tw`bg-gray-100 rounded-md p-1`}
  width:fit-content;
`;
export const StyledInput = styled(Input)``;
export const Label = styled.label`
  display: flex;
  align-items: center;
`;
