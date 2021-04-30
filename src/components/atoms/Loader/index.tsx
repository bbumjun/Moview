import { useEffect } from "@storybook/client-api";
import React, { useState } from "react";
import styled from "styled-components";
import useInterval from "hooks/useInterval";
import Text from "components/atoms/Text";
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const IconBox = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  top: calc(50% - 2.5rem);
  left: calc(50% - 2.5rem);
`;
const Icon = styled(Text)`
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  text-align: center;
`;

const Loader: React.FC = () => {
  const emoji = ["🎥", "🍿", "🎬", "📺"];
  const [index, setIndex] = useState(0);

  useInterval(() => setIndex(index + 1), 200);

  return (
    <Wrapper>
      <IconBox>
        <Icon>{emoji[index % emoji.length]}</Icon>
      </IconBox>
    </Wrapper>
  );
};

export default Loader;
