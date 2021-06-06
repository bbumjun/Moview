import styled from "styled-components";
import Text from "components/atoms/Text";
export const StyledText = styled(Text)`
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.red};
  }
  transition: all 0.2s;
`;
