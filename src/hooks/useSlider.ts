import { useState, useEffect, useRef } from "react";

const useSlider = () => {
  const containerRef = useRef<HTMLUListElement>();
  const [containerSize, setContainerSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const handleContainerSize = () => {
    const { offsetWidth, scrollWidth } = containerRef.current;
    setContainerSize(offsetWidth);
    setTotalPage(Math.ceil(scrollWidth / offsetWidth) - 1);
  };
  useEffect(() => {
    handleContainerSize();
    window.addEventListener("resize", handleContainerSize);
    return () => {
      window.removeEventListener("resize", handleContainerSize);
    };
  }, [containerRef.current]);

  useEffect(() => {
    containerRef.current.scrollTo({
      left: currentPage * containerSize,
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, containerSize]);
  const handlePageToLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageToRight = () => {
    setCurrentPage(currentPage + 1);
  };

  return {
    containerRef,
    handlePageToLeft,
    handlePageToRight,
    currentPage,
    totalPage,
  };
};

export default useSlider;
