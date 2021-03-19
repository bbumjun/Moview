import styled from "styled-components";

interface TextProps {
  color?: string;
  fontWeight?: string;
}
const Text = styled.div<TextProps>`
  color: ${(props) => props.color ?? "currentColor"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
`;

export default Text;
