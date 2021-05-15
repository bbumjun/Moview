import { useState, useEffect } from "react";

const useKeyPress = () => {
  const [value, setValue] = useState<string>(null);

  const handleKeyPress = (e: KeyboardEvent) => {
    setValue(e.key);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return [value];
};

export default useKeyPress;
