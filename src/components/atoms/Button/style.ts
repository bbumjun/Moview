import styled from "styled-components";

interface IButtonProps {
  active: boolean;
}
export const Button = styled.button<IButtonProps>`
  background-color: white;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  font-weight: ${(p: IButtonProps) => (p.active ? "bold" : "normal")};
`;
