import styled from "styled-components";

interface IButtonProps {
  active: boolean;
}
export const Button = styled.button<IButtonProps>`
  background-color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  &:focus {
    outline: 0;
  }
  font-weight: ${(p: IButtonProps) => (p.active ? "bold" : "normal")};
`;
