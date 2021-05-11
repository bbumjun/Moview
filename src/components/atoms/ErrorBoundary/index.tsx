import React from "react";
import Text from "components/atoms/Text";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Emoticon = styled.div`
  font-size: 5rem;
`;

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true });

    console.warn(error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Container>
            <Emoticon>🤔</Emoticon>
            <Text>페이지 로드 중 문제가 생겼어요 ㅠㅠ</Text>
          </Container>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
