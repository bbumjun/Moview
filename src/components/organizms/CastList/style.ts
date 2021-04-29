import styled from "styled-components";
import Button from "components/atoms/Button";

export const Wrapper = styled.div`
  position: relative;
`;
export const Container = styled.ul`
  display: flex;
  overflow: hidden;
`;
export const Item = styled.li`
  flex: 1 0 15%;
  min-width: 8rem;
  padding: 0.5rem 0.5rem 0.5rem 0;
  @media ${({ theme }) => theme.device.tablet} {
    flex: 1 0 10%;
  }
`;

export const LeftButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  box-shadow: 1px 0px 5px gray;
  left: -1rem;
  top: 40%;
  padding: 0.5rem;
`;
export const RightButton = styled(Button)`
  position: absolute;
  border-radius: 100%;
  box-shadow: 1px 0px 5px gray;
  right: -1rem;
  top: 40%;
  padding: 0.5rem;
`;
