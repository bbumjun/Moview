import React, { useState, useEffect, useCallback } from "react";

const useSlider = () => {
  const { useState, useEffect, useCallback } = React;
  const [cardsContainerNode, setCardsContainerNode] = useState(null);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [leftBtnHidden, setLeftBtnHidden] = useState(false);
  const [rightBtnHidden, setRightBtnHidden] = useState(false);
  const [windowSize, setWindowSize] = useState(null);
  const cardsContainerRef = useCallback(
    (node) => {
      if (!node) return;
      const { offsetWidth, scrollWidth } = node;
      setCardsContainerNode(node);
      setOffset(offsetWidth);
      setTotalPage(Math.ceil(scrollWidth / offsetWidth) - 1);
    },
    [windowSize]
  );

  const handleLeftSlide = () => {
    setPage(page - 1);
  };

  const handleRightSlide = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!cardsContainerNode) {
      return;
    }
    cardsContainerNode.scrollTo({
      left: page * offset,
      top: 0,
      behavior: "smooth",
    });
    setLeftBtnHidden(page == 0 ? true : false);
    setRightBtnHidden(page == totalPage ? true : false);
  }, [page, offset]);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    cardsContainerRef,
    handleLeftSlide,
    handleRightSlide,
    leftBtnHidden,
    rightBtnHidden,
  };
};

export default useSlider;
