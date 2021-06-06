import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";
import topImg from "images/top.svg";
import debounce from "debounce";
import { motion } from "framer-motion";
const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

const TopButton = () => {
  const [isScrollDown, setScrollDown] = useState(false);
  const handleScroll = debounce(() => {
    if (window.scrollY > 100) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  }, 300);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <Wrapper
      initial="hidden"
      animate={isScrollDown ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.2 }}
      onClick={handleClick}
    >
      <Image src={topImg} alt="맨 위로" />
    </Wrapper>
  );
};

export default TopButton;
