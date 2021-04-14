import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  active: boolean;
}
export const Button = styled.button<IButtonProps>`
  /* ${tw`p-2 rounded bg-white`} */
  background-color: white;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  font-weight: ${(p: IButtonProps) => (p.active ? "bold" : "normal")};
`;
