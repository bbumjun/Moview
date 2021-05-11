import styled from "styled-components";
import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";

export const Container = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.375rem;
  margin: 0.25rem;
`;
export const StyledInput = styled(Input)``;
export const StyledIcon = styled(Icon)`
  padding: 0.5rem;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
`;
