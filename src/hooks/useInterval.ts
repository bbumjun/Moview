import { useState, useEffect, useRef } from "react";

const useInterval = (callback: Function, delay: number) => {
  const savedCallback = useRef<Function>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
