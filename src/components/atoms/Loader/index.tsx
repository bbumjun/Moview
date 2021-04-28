import { useEffect } from "@storybook/client-api";
import React, { useState } from "react";
import styled from "styled-components";
import useInterval from "hooks/useInterval";
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Icon = styled.div`
  position: absolute;
  top: calc(50% - 3rem);
  left: calc(50% - 3rem);
  font-size: 3rem;
`;

const Loader: React.FC = () => {
  const emoji = ["🎥", "🍿", "🎬", "📺"];
  const [index, setIndex] = useState(0);

  useInterval(() => setIndex(index + 1), 300);

  return (
    <Wrapper>
      <Icon>{emoji[index % emoji.length]}</Icon>
    </Wrapper>
  );
};

export default Loader;
