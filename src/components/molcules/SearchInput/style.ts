import styled from "styled-components";
import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";

export const Container = styled.div`
  position: relative;
  width: 15rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.2rem;
`;
export const StyledInput = styled(Input)``;
export const StyledIcon = styled(Icon)`
  padding: 0.5rem;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
`;
