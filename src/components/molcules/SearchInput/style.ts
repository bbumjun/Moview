import styled from "styled-components";
import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.2rem;
`;
export const StyledInput = styled(Input)`
  width: 15rem;
  transition: all 0.3s;
  &:focus {
    width: 25rem;
    @media ${({ theme }) => theme.device.tabletL} {
      width: 20rem;
    }
  }
`;
export const StyledIcon = styled(Icon)`
  padding: 0.5rem;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
`;
