import React from "react";
import Text from "components/atoms/Text";
import styled from "styled-components";
import { AxiosError } from "axios";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const Emoticon = styled.div`
  font-size: 5rem;
`;

class ErrorBoundary extends React.Component<
  {},
  { hasError: boolean; message: string; status: number }
> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, message: "", status: null };
  }

  componentDidCatch(error: AxiosError, info: React.ErrorInfo) {
    const { status } = error.response;
    this.setState({ hasError: true });
    this.setState({ status });
    if (status === 404) {
      this.setState({ message: "요청한 데이터를 찾을 수 없어요." });
    } else if (status >= 401 && status <= 403) {
      this.setState({ message: "데이터에 접근할 수 있는 권한이 없어요." });
    } else if (status >= 500) {
      this.setState({ message: "서버에 문제가 생긴 것 같아요." });
    } else {
      this.setState({ message: "페이지 로드 중 문제가 생겼어요 ㅠㅠ" });
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Container>
            <Emoticon>🤔</Emoticon>
            <Text color="red" fontSize={4} fontWeight={800}>
              {this.state.status}
            </Text>
            <Text>{this.state.message}</Text>
          </Container>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
